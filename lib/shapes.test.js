class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
}

module.exports = Shape;

const userShapeType = 'circle';
const userShapeColor = 'blue';

const userShape = new Shape(userShapeType, userShapeColor);

console.log(userShape.type);
console.log(userShape.color);

const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
    it('should reneder a circle SVG markup with the correct color', () => {
        const color = 'green';
        const circle = new Circle(color);
        const expectedSVG = `<circle cx="122" cy="100" r="70" fill="${color}" />`

        expect(circle.render()).toBe(expectedSVG);
    });
});

describe('square', () => {
    it('should reneder a square SVG markup with the correct color', () => {
        const color = 'green';
        const square = new Square(color);
        const expectedSVG = `<rect x="70" y="50" width="100" height="100" fill="${color}" />`

        expect(square.render()).toBe(expectedSVG);
    });

});

describe('triangle', () => {
    it('should reneder a triangle SVG markup with the correct color', () => {
        const color = 'green';
        const triangle = new Triangle(color);
        const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`

        expect(triangle.render()).toBe(expectedSVG);
    });
});