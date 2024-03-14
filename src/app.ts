/*
Створіть класи Circle, Rectangle, Square і Triangle.
У кожного з них є загальнодоступний метод calculateArea.
У кожної фігури є загальнодоступні властивості - колір і назва,які не можна змінювати після створення.
У Square і Rectangle зі свого боку є ще додатковий метод print,який виводить рядок із формулою розрахунку площі
*/
class Circle {
    private color: string;
    private name: string;
    private radius: number;
    constructor(color: string, name: string, radius: number) {
        this.color = color;
        this.name = name;
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle {
    private color: string;
    private name: string;
    private width: number;
    private height: number;
    constructor(color: string, name: string, width: number, height: number) {
        this.color = color;
        this.name = name;
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
    print(): void {
        console.log(`Area of ${this.name} is ${this.width} * ${this.height}`);
    }
}
class Square {
    private color: string;
    private name: string;
    private sideLength: number;
    constructor(color: string, name: string, sideLength: number) {
        this.color = color;
        this.name = name;
        this.sideLength = sideLength;
    }
    calculateArea(): number {
        return this.sideLength * this.sideLength;
    }
    print(): void {
        console.log(`Area of ${this.name} is ${this.sideLength} * ${this.sideLength}`);
    }
}
class Triangle {
    private color: string;
    private name: string;
    private base: number;
    private height: number;
    constructor(color: string, name: string, base: number, height: number) {
        this.color = color;
        this.name = name;
        this.base = base;
        this.height = height;
    }
    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}

