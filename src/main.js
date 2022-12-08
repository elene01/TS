"use strict";
exports.__esModule = true;
var area_1 = require("./area");
console.log((0, area_1.getArea)({ shape: 'Circle', radius: 5 }));
console.log((0, area_1.getArea)({ shape: 'Rectangle', length: 10, width: 5 }));
console.log((0, area_1.getArea)({ shape: 'Triangle', height: 10, base: 20 }));
