class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="122" cy="100" r="70" fill="${this.color}" />`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="70" y="50" width="100" height="100" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}" />`

    }
}
module.exports = {
    Circle,
    Square,
    Triangle
};