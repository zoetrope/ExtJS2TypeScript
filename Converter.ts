/// <reference path='./lib/node.d.ts' />
/// <reference path='./lib/linq.js.d.ts' />

export module ExtJS2TypeScript {

    var Enumerable = <linqjs.EnumerableStatic>require("./lib/linq.js");

    export class Converter {

        private undefinedTypes:String[] = [];

        private exportMember:Boolean = false;
        private hasConstructor:Boolean = false;
        private enableImplements = false;

        private definedClasses:String[] = [];
        private definedInterfaces:String[] = [];

        private membersName:String[] = [];

        constructor(classes:any[]) {
            for (var i in classes) {
                if (Enumerable.from(classes[i]["members"]["method"]).any(x=>x["name"] === "constructor")) {
                    this.definedClasses.push(classes[i]["name"]);
                } else {
                    this.definedInterfaces.push(classes[i]["name"] + "Static");
                }
            }
        }

        createInterface(jsonDoc:any):String {
            var str = "";

            this.hasConstructor = Enumerable.from(jsonDoc["members"]["method"]).any(x=>x["name"] === "constructor");

            var names = Enumerable.from(jsonDoc["name"].split("."));

            var ifName = names.last();
            var nsName = names.take(names.count() - 1).toArray().join(".");

            if (names.count() === 1) {
                this.exportMember = true;
            }
            else {
                this.exportMember = false;
            }

            if (!this.exportMember) {
                str += "module " + nsName + "{\n";
                if (this.hasConstructor) {
                    str += "export class " + ifName;
                } else {
                    str += "export interface " + ifName + "Static";
                }

                if (jsonDoc["extends"]) {
                    if (Enumerable.from(this.definedClasses).any(x=>x === jsonDoc["extends"])) {
                        str += " extends " + this.getType(jsonDoc["extends"]);
                    } else if (this.hasConstructor) {
                        str += " implements " + this.getType(jsonDoc["extends"]);
                        this.enableImplements = true;
                    } else {
                        str += " extends " + this.getType(jsonDoc["extends"]);
                    }

                }
            } else {
                str += "module " + ifName;
            }

            return str;
        }

        createCfg(jsonDoc:any):String {
            var str = "";

            str += "// Cfg\n";
            for (var i in jsonDoc["members"]["cfg"]) {
                var cfg = jsonDoc["members"]["cfg"][i];

                if (cfg["private"])continue;
                if (cfg["owner"] != jsonDoc["name"])continue;
                if (this.enableImplements && cfg["overrides"]) continue;
                if (Enumerable.from(this.membersName).any(x=>x === cfg["name"])) continue;
                this.membersName.push(cfg["name"]);

                str += " ";
                if (this.exportMember) str += "export var ";

                str += this.getName(cfg["name"]) + " : " + this.getType(cfg["html_type"]) + ";\n";

            }

            return str;
        }

        createProperty(jsonDoc:any):String {
            var str = "";

            str += "// Properties\n";
            for (var i in jsonDoc["members"]["property"]) {
                var prop = jsonDoc["members"]["property"][i];

                if (prop["private"])continue;
                if (prop["owner"] != jsonDoc["name"])continue;
                if (this.enableImplements && prop["overrides"]) continue;
                if (Enumerable.from(this.membersName).any(x=>x === prop["name"])) continue;
                this.membersName.push(prop["name"]);

                str += " ";
                if (this.exportMember) str += "export var ";

                str += this.getName(prop["name"]) + " : " + this.getType(prop["html_type"]) + ";\n";
            }
            return str;
        }

        createEvent(jsonDoc:any):String {
            var str = "";
            str += "// Events\n";
            for (var i in jsonDoc["members"]["event"]) {
                var ev = jsonDoc["members"]["event"][i];

                if (ev["owner"] != jsonDoc["name"])continue;
                if (this.enableImplements && ev["overrides"]) continue;
                if (Enumerable.from(this.membersName).any(x=>x === ev["name"])) continue;
                this.membersName.push(ev["name"]);

                str += " ";
                if (this.exportMember) str += "export function ";

                str += ev["name"] + "(";

                if (ev["params"]) {
                    for (var p = 0; p < ev["params"].length; p++) {
                        if (p > 0)str += ",";
                        str += this.getName(ev["params"][p]["name"]) + ":" + this.getType(ev["params"][p]["html_type"]);
                    }
                }
                str += ") : void;\n";
            }
            return str;
        }

        createMethod(jsonDoc:any):String {
            var str = "";
            str += "// Methods\n";

            for (var i in jsonDoc["members"]["method"]) {
                var method = jsonDoc["members"]["method"][i];
                if (method["private"])continue;
                if (method["owner"] != jsonDoc["name"]) continue;
                if (this.enableImplements && method["overrides"]) continue;
                if (Enumerable.from(this.membersName).any(x=>x === method["name"])) continue;
                this.membersName.push(method["name"]);

                str += " ";
                if (this.exportMember) str += "export function ";

                str += method["name"] + "(";
                if (method["params"]) {
                    for (var p = 0; p < method["params"].length; p++) {
                        if (p > 0)str += ",";
                        str += this.getName(method["params"][p]["name"]) + ":" + this.getType(method["params"][p]["html_type"]);
                    }
                }

                str += ")";
                if (method["name"] === "constructor") {
                    // do nothing
                } else if (method["return"]) {
                    str += " : " + this.getType(method["return"]["html_type"]);
                } else {
                    str += " : void";
                }
                str += ";\n";
            }
            return str;
        }

        convertFile(jsonDoc:any):String {
            if (this.isPrimitiveType(jsonDoc["name"])) {
                return "/* internal JS type: " + jsonDoc["name"] + "*/";
            }

            var output = "";
            output += this.createInterface(jsonDoc);
            output += " {\n";
            output += this.createCfg(jsonDoc);
            output += this.createProperty(jsonDoc);
            output += this.createEvent(jsonDoc);
            output += this.createMethod(jsonDoc);
            output += "}\n";

            var names = Enumerable.from(jsonDoc["name"].split("."));

            if (!this.hasConstructor) {
                output += "declare var " + names.last() + " : " + jsonDoc["name"] + "Static;\n";
            }

            if (names.count() !== 1) {
                output += "}\n";
            }

            output += "\n";

            return output;

        }

        isPrimitiveType(p:String):bool {
            var primitives = Enumerable.from(["Array", "Boolean", "Date", "Function", "Number", "Object", "RegExp", "String", "HTMLElement"]);
            if (primitives.contains(p)) {
                return true;
            } else {
                return false;
            }
        }

        getName(p:String):String {
            if (p === "this")return "_this";
            if (p === "class")return "_class";
            if (p === "new")return "_new";
            return p.replace('-', '_');
        }

        getType(p:String):String {
            p = p.trim();

            if (p === "undefined")return "void";
            if (p.indexOf("/") !== -1)return "any" + " /*" + p + "*/";

            if (this.endswith(p, "...") || this.endswith(p, "[]")) {
                var baseName = p.replace("...", "").replace("[]", "");
                if (this.isPrimitiveType(baseName)) {
                    return baseName + "[]";
                } else if (Enumerable.from(this.definedClasses).any(x=>x === baseName)) {
                    return baseName + "[]";
                }

                if (!Enumerable.from(this.definedInterfaces).any(x=>x === baseName + "Static")) {
                    this.undefinedTypes.push(baseName + "Static");
                }

                return baseName + "Static[]";
            }

            if (this.isPrimitiveType(p)) {
                return p;
            } else if (Enumerable.from(this.definedClasses).any(x=>x === p)) {
                return p;
            }

            if (!Enumerable.from(this.definedInterfaces).any(x=>x === p + "Static")) {
                this.undefinedTypes.push(p + "Static");
            }

            return p + "Static";
        }

        endswith(p:String, suf:any):bool {
            var sub = p.length - suf.length;
            return (sub >= 0) && (p.lastIndexOf(suf) === sub);
        }

        outputUndefinedTypes():String {
            return Enumerable.from(this.undefinedTypes).distinct().select(typeName=> {
                var str = "";
                var names = Enumerable.from(typeName.split("."));
                var ifName = names.last();
                var nsName = names.take(names.count() - 1).toArray().join(".");

                if (names.count() !== 1) {
                    str += "module " + nsName + "{\n";
                }

                str += "interface " + ifName + "{}\n";

                if (names.count() !== 1) {
                    str += "}\n";
                }

                return str;
            }).toArray().join("\n");
        }

    }

}