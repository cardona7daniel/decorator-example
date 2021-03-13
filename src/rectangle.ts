import { Shape } from './shape.interface';

export class Rectangle implements Shape {
    public draw(): string {
        return 'Rectangle';
    }
}