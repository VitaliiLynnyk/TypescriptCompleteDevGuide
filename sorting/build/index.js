"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(8);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
console.log(linkedList.print);
