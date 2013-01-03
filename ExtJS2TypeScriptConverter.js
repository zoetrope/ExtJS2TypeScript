var fs = require("fs");
var path = require("path");
var util = require("util");
var Enumerable = require("./lib/linq.js");
var ExtJS2TypeScriptConverter = (function () {
    function ExtJS2TypeScriptConverter() {
        this.definedInterfaces = [];
        this.usedInterfaces = [];
        this.exportMember = false;
    }
    ExtJS2TypeScriptConverter.prototype.createInterface = function (jsonDoc) {
        var str = "";
        var names = Enumerable.from(jsonDoc["name"].split("."));
        var ifName = names.last() + "Static";
        var nsName = names.take(names.count() - 1).toArray().join(".");
        if(names.count() === 1) {
            this.exportMember = true;
        } else {
            this.exportMember = false;
        }
        if(!this.exportMember) {
            str += "module " + nsName + "{\n";
            str += "export interface " + ifName;
            if(jsonDoc["extends"]) {
                str += " extends " + this.getType(jsonDoc["extends"]);
            }
        } else {
            str += "module " + ifName;
        }
        return str;
    };
    ExtJS2TypeScriptConverter.prototype.createCfg = function (jsonDoc) {
        var str = "";
        str += "// Cfg\n";
        for(var i in jsonDoc["members"]["cfg"]) {
            var prop = jsonDoc["members"]["cfg"][i];
            if(prop["private"]) {
                continue;
            }
            if(prop["owner"] != jsonDoc["name"]) {
                continue;
            }
            str += "    ";
            if(this.exportMember) {
                str += "export var ";
            }
            str += this.getName(prop["name"]) + " : " + this.getType(prop["html_type"]) + ";\n";
        }
        return str;
    };
    ExtJS2TypeScriptConverter.prototype.createProperty = function (jsonDoc) {
        var str = "";
        str += "// Properties\n";
        for(var i in jsonDoc["members"]["property"]) {
            var prop = jsonDoc["members"]["property"][i];
            if(prop["private"]) {
                continue;
            }
            if(prop["owner"] != jsonDoc["name"]) {
                continue;
            }
            str += "    ";
            if(this.exportMember) {
                str += "export var ";
            }
            str += this.getName(prop["name"]) + " : " + this.getType(prop["html_type"]) + ";\n";
        }
        return str;
    };
    ExtJS2TypeScriptConverter.prototype.createEvent = function (jsonDoc) {
        var str = "";
        str += "// Events\n";
        for(var i in jsonDoc["members"]["event"]) {
            var ev = jsonDoc["members"]["event"][i];
            if(ev["owner"] != jsonDoc["name"]) {
                continue;
            }
            str += "    ";
            if(this.exportMember) {
                str += "export function ";
            }
            str += ev["name"] + "(";
            if(ev["params"]) {
                for(var p = 0; p < ev["params"].length; p++) {
                    if(p > 0) {
                        str += ",";
                    }
                    str += this.getName(ev["params"][p]["name"]) + ":" + this.getType(ev["params"][p]["html_type"]);
                }
            }
            str += ") : void;\n";
        }
        return str;
    };
    ExtJS2TypeScriptConverter.prototype.createMethod = function (jsonDoc) {
        var str = "";
        str += "// Methods\n";
        for(var i in jsonDoc["members"]["method"]) {
            var method = jsonDoc["members"]["method"][i];
            if(method["private"]) {
                continue;
            }
            if(method["owner"] != jsonDoc["name"]) {
                continue;
            }
            str += "    ";
            if(this.exportMember) {
                str += "export function ";
            }
            str += method["name"] + "(";
            if(method["params"]) {
                for(var p = 0; p < method["params"].length; p++) {
                    if(p > 0) {
                        str += ",";
                    }
                    str += this.getName(method["params"][p]["name"]) + ":" + this.getType(method["params"][p]["html_type"]);
                }
            }
            str += ") : ";
            if(method["return"]) {
                str += this.getType(method["return"]["html_type"]);
            } else {
                str += "void";
            }
            str += ";\n";
        }
        return str;
    };
    ExtJS2TypeScriptConverter.prototype.convertFile = function (jsonDoc) {
        if(this.isPrimitiveType(jsonDoc["name"])) {
            return "/* internal JS type: " + jsonDoc["name"] + "*/";
        }
        this.definedInterfaces.push(jsonDoc["name"] + "Static");
        var str_list = "";
        str_list += this.createInterface(jsonDoc);
        str_list += " {\n";
        str_list += this.createCfg(jsonDoc);
        str_list += this.createProperty(jsonDoc);
        str_list += this.createEvent(jsonDoc);
        str_list += this.createMethod(jsonDoc);
        str_list += "}\n";
        var names = Enumerable.from(jsonDoc["name"].split("."));
        str_list += "declare var " + names.last() + " : " + jsonDoc["name"] + "Static;\n";
        if(names.count() !== 1) {
            str_list += "}\n";
        }
        str_list += "\n";
        return str_list;
    };
    ExtJS2TypeScriptConverter.prototype.isPrimitiveType = function (p) {
        var primitives = Enumerable.from([
            "Array", 
            "Boolean", 
            "Date", 
            "Function", 
            "Number", 
            "Object", 
            "RegExp", 
            "String", 
            "HTMLElement"
        ]);
        if(primitives.contains(p)) {
            return true;
        } else {
            return false;
        }
    };
    ExtJS2TypeScriptConverter.prototype.getName = function (p) {
        if(p === "this") {
            return "_this";
        }
        if(p === "class") {
            return "_class";
        }
        if(p === "new") {
            return "_new";
        }
        return p.replace('-', '_');
    };
    ExtJS2TypeScriptConverter.prototype.getType = function (p) {
        p = p.trim();
        if(p === "undefined") {
            return "void";
        }
        if(p.indexOf("/") !== -1) {
            return "any" + " /*" + p + "*/";
        }
        if(this.endswith(p, "...") || this.endswith(p, "[]")) {
            var baseName = p.replace("...", "").replace("[]", "");
            if(this.isPrimitiveType(baseName)) {
                return baseName + "[]";
            }
            this.usedInterfaces.push(baseName + "Static");
            return baseName + "Static[]";
        }
        if(this.isPrimitiveType(p)) {
            return p;
        }
        this.usedInterfaces.push(p + "Static");
        return p + "Static";
    };
    ExtJS2TypeScriptConverter.prototype.endswith = function (p, suf) {
        var sub = p.length - suf.length;
        return (sub >= 0) && (p.lastIndexOf(suf) === sub);
    };
    ExtJS2TypeScriptConverter.prototype.getUndefinedInterfaces = function () {
        var defined = Enumerable.from(this.definedInterfaces).distinct();
        var used = Enumerable.from(this.usedInterfaces).distinct();
        return used.except(defined).select(function (typeName) {
            var str = "";
            var names = Enumerable.from(typeName.split("."));
            var ifName = names.last();
            var nsName = names.take(names.count() - 1).toArray().join(".");
            if(names.count() !== 1) {
                str += "module " + nsName + "{\n";
            }
            str += "interface " + ifName + "{}\n";
            if(names.count() !== 1) {
                str += "}\n";
            }
            return str;
        }).toArray().join("\n");
    };
    return ExtJS2TypeScriptConverter;
})();
var str = "";
var converter = new ExtJS2TypeScriptConverter();
var dirname = process.argv[2];
fs.readdirSync(dirname).forEach(function (fileName) {
    var jsonDoc = JSON.parse(fs.readFileSync(dirname + "/" + fileName));
    var ret = converter.convertFile(jsonDoc);
    str += ret;
});
str += converter.getUndefinedInterfaces();
fs.writeFileSync("Ext.d.ts", str);
