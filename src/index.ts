import { Circle } from './circle';
import { BackgroundShapeDecorator } from './backgroung-shape-decorator';
import { BorderShapeDecorator } from './border-shape-decorator';
import { Shape } from './shape.interface';


const circle = new Circle();
const borderShapeDecorator: Shape = new BorderShapeDecorator(new Circle());
const backgroundShapeDecorator: Shape = new BackgroundShapeDecorator(borderShapeDecorator);

console.log('_________________________________________________');
console.log(`RESULT: ${circle.draw()}`);
console.log('_________________________________________________');
console.log(`RESULT: ${borderShapeDecorator.draw('Red')}`);
console.log('_________________________________________________');
console.log(`RESULT: ${backgroundShapeDecorator.draw('Red')}`);
console.log('_________________________________________________');
