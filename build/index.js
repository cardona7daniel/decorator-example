"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const backgroung_shape_decorator_1 = require("./backgroung-shape-decorator");
const border_shape_decorator_1 = require("./border-shape-decorator");
const circle = new circle_1.Circle();
const borderShapeDecorator = new border_shape_decorator_1.BorderShapeDecorator(new circle_1.Circle());
const backgroundShapeDecorator = new backgroung_shape_decorator_1.BackgroundShapeDecorator(borderShapeDecorator);
console.log('_________________________________________________');
console.log(`RESULT: ${circle.draw()}`);
console.log('_________________________________________________');
// console.log(`RESULT: ${borderShapeDecorator.draw('Red')}`);
// console.log('_________________________________________________');
// console.log(`RESULT: ${backgroundShapeDecorator.draw('Red')}`);
// console.log('_________________________________________________');