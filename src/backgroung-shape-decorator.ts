import { ShapeDecorator } from "./shape-decorator";

export class BackgroundShapeDecorator extends ShapeDecorator {
    public draw(color: string): string {
        return `${color}Background(${super.draw(color)})`;
    }
}
