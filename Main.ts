/// <reference path='./lib/node.d.ts' />
/// <reference path='./lib/linq.js.d.ts' />

var fs = require("fs");
var path = require("path");
var util = require("util");

import ts = module("TopologicalSort");
import ext2ts = module("ExtJS2TypeScriptConverter");


class StructInfo {
    name:String;

    constructor(name:String) {
        this.name = name;
    }
}



var str = "";
var converter = new ext2ts.zoetro.ExtJS2TypeScriptConverter();
var dirname = process.argv[2];

var classes = {};

fs.readdirSync(dirname).forEach(fileName=> {
    var jsonDoc = JSON.parse(fs.readFileSync(dirname + "/" + fileName));
    classes[jsonDoc['name']] = new ts.zoetro.GraphNode(jsonDoc);
});

for(var x in classes){
    var ext = classes[x].node['extends'];
    if(ext){
        if(classes[ext]){
            classes[x].next.push(classes[ext]);
        }
    }
}

var topo = new ts.zoetro.TopologicalSort();
var values = Array();
for(var x in classes)
{
    values.push(classes[x]);
}
var sortedClasses = topo.sort(values);
sortedClasses.forEach(x=>console.log(x.name));


for(var x in sortedClasses){
    var ret = converter.convertFile(sortedClasses[x]);
    str += ret;
}

str = converter.getUndefinedInterfaces() + str;

fs.writeFileSync("Ext.d.ts", str);
