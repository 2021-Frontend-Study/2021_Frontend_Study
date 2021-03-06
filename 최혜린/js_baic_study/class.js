'use strict';
//object - oriendted progoramming
//class:template
//object:instance of a class
//JavaScript classes
// -introduced in ES6
// -syntactical sugar over prototype-based inheritance (문법상으로 편리함을 제공 ) 

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
        console.log(`${this.name}: hello`);
    }
}

const hyerin = new Person('hyerin', 20);
console.log(hyerin.name);
console.log(hyerin.age);
hyerin.speak();

//2. Getter and setters 
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }

}

const user1 = new User('Steve', 'job', '-1');
console.log(user1.age);

// 3. Fields (public.private)
//Too soon!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refernce
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4.Static properties and methods 
//Too soon!
class Article {

    static publisher = 'Hyerin';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//5.Inheritancs
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`darwing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🧨');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Traingle:color : ${this.color} `;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());



//6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());