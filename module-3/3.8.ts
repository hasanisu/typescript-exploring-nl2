{
    //Ploymorphism 
/*
kono class ba metod er isthan kal patro vede different output dei shetai polymorphism bole 

*/

class Person {
    //method
    getSleep(){
        console.log('I am sleeping for 8 hours per day')
    }
}

//Create inheritances
class Student extends Person{
    getSleep() {
        console.log('I am sleepign for 7 hours per day')
    }
}
class Developer extends Person{
    getSleep() {
        console.log('I am sleepign for 6 hours per day')
    }
}

// create function
const getSleepingOurs =(param: Person)=>{
    param.getSleep()
}


//create instances 
const person1 = new Person()
const person2 = new Student()
const person3 = new Developer()


getSleepingOurs(person1)
getSleepingOurs(person2)
getSleepingOurs(person3)


// example -2 
class Shape {
    getArea():number{
        return 0;
    }
}

//pi*r*r
class Circle extends Shape{
    radius: number;
    constructor(radius: number){
        super();
        this.radius = radius;
    }
    getArea(): number{
        return Math.PI * this.radius * this.radius;
    }
}

//height and width 
class Ractangle extends Shape{
    height: number;
    width: number;
    constructor(height: number, width:number){
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number{
        return this.height*this.width;
    }
}

//fuction 
const getShapeArea =(param: Shape)=>{
    console.log(param.getArea())
}

//instance 
const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Ractangle(10,20);

//call
getShapeArea(shape2)








    //
}