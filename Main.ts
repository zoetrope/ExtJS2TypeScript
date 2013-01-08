/// <reference path='./lib/node.d.ts' />
/// <reference path='./lib/linq.js.d.ts' />

var fs = require("fs");
var path = require("path");
var util = require("util");

import mod_sort = module("TopologicalSorter");
import mod_convert = module("Converter");


var output = "";
var dirname = process.argv[2];

var classes = {};

fs.readdirSync(dirname).forEach(fileName=> {
    var jsonDoc = JSON.parse(fs.readFileSync(dirname + "/" + fileName));
    classes[jsonDoc['name']] = new mod_sort.ExtJS2TypeScript.GraphNode(jsonDoc);
});

for (var x in classes) {
    var ext = classes[x].node['extends'];
    if (ext) {
        if (classes[ext]) {
            classes[x].next.push(classes[ext]);
        }
    }
}

var topo = new mod_sort.ExtJS2TypeScript.TopologicalSorter();
var values = Array();
for (var x in classes) {
    values.push(classes[x]);
}
var sortedClasses = topo.sort(values);
sortedClasses.forEach(x=>console.log(x.name));

var converter = new mod_convert.ExtJS2TypeScript.Converter(sortedClasses);
for (var x in sortedClasses) {
    output += converter.convertFile(sortedClasses[x]);
}

output = converter.outputUndefinedTypes() + output;

fs.writeFileSync("Ext.d.ts", output);

