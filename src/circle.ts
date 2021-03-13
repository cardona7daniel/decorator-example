import { Shape } from './shape.interface';

export class Circle implements Shape {
    public draw(): string {
        return 'Circle';
    }
}