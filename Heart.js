"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = [
    {
        "date": "2023-04-28",
        "min": 60,
        "max": 119,
        "median": 81,
        "latestDataTimestamp": "2023-04-28T21:54:00"
    },
];
var jsonData = JSON.stringify(data, null, 4);
fs.writeFileSync('output.json', jsonData);
