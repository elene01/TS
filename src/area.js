"use strict";
exports.__esModule = true;
exports.getArea = void 0;
function getArea(figure) {
    switch (figure.shape) {
        case 'Circle':
            return getCircleArea(figure.radius);
        case 'Rectangle':
            return getRectangleArea(figure.length, figure.width);
        case 'Triangle':
            return getTriangleArea(figure.height, figure.base);
    }
}
exports.getArea = getArea;
function getCircleArea(radius) {
    return Math.PI * radius * radius;
}
function getRectangleArea(length, width) {
    return length * width;
}
function getTriangleArea(height, base) {
    return (height * base) / 2;
}
