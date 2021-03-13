"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundShapeDecorator = void 0;
const shape_decorator_1 = require("./shape-decorator");
class BackgroundShapeDecorator extends shape_decorator_1.ShapeDecorator {
    draw(color) {
        return `${color}Background(${super.draw(color)})`;
    }
}
exports.BackgroundShapeDecorator = BackgroundShapeDecorator;
