import { ShapeDecorator } from "./shape-decorator";

export class BorderShapeDecorator extends ShapeDecorator {
    public draw(color: string): string {
        return `${color}Border(${super.draw(color)})`;
    }
}
