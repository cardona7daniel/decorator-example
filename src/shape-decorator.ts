import { Shape } from './shape.interface';

export class ShapeDecorator implements Shape {
    protected component: Shape;

    constructor(component: Shape) {
        this.component = component;
    }

    public draw(color: string): string {
        return this.component.draw(color);
    }
}
