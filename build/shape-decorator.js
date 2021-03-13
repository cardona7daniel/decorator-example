"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeDecorator = void 0;
class ShapeDecorator {
    constructor(component) {
        this.component = component;
    }
    draw(color) {
        return this.component.draw(color);
    }
}
exports.ShapeDecorator = ShapeDecorator;
