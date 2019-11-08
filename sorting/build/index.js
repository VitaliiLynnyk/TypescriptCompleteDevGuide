"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new CharactersCollection_1.CharactersCollection('trolololsabfdcbb');
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(sorter);
