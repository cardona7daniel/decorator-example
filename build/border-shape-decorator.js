"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderShapeDecorator = void 0;
const shape_decorator_1 = require("./shape-decorator");
class BorderShapeDecorator extends shape_decorator_1.ShapeDecorator {
    draw(color) {
        return `${color}Border(${super.draw(color)})`;
    }
}
exports.BorderShapeDecorator = BorderShapeDecorator;
