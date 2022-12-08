import { Circle, Rectangle, Triangle } from './main';
export function getArea(figure: Circle | Rectangle | Triangle): number {
  switch (figure.shape) {
    case 'Circle':
      return getCircleArea(figure.radius);
    case 'Rectangle':
      return getRectangleArea(figure.length, figure.width);
    case 'Triangle':
      return getTriangleArea(figure.height, figure.base);
  }
}
function getCircleArea(radius: number): number {
  return Math.PI * radius * radius;
}
function getRectangleArea(length: number, width: number): number {
  return length * width;
}
function getTriangleArea(height: number, base: number): number {
  return (height * base) / 2;
}
