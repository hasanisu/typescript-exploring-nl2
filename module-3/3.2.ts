{
    //OOP-Inheritance 

    /*
    kono ekta property ba method protik shompotti hishebe 
    class theke pele take inheritance bole 
    */

    //parant class
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name,
            this.age = age,
            this.address = address
        }

        getSleep(numberOfHours: number){
            console.log(`${this.name} will sleep for ${numberOfHours}`)
        }
    }


    class Student extends Person {
        // name: string;
        // age: number;
        // address: string;

        constructor(name: string, age: number, address: string){
            // this.name = name,
            // this.age = age,
            // this.address = address
            super(name, age, address) //parent er constructor theke receive korar jonno 
        }

        getSleep(numberOfHours: number){
            console.log(`${this.name} will sleep for ${numberOfHours}`)
        }
    }

    const student1 = new Student ('Mr.X', 25, 'tokyo')
    student1.getSleep(11);



    class Teacher extends Person {
        // name: string;
        // age: number;
        // address: string;
        designation: string;

        constructor(name: string, age: number, address: string, designation: string){
            // this.name = name,
            // this.age = age,
            // this.address = address
            super(name, age, address)
            this.designation = designation
            
        }


        takeClass(numOfClass: number){
            console.log(`${this.name} will take ${numOfClass}`)
        }
    }

    const teacher1 = new Teacher ('Mr.Teacher', 42, 'tokyo', 'principle')
    teacher1.takeClass(20);









    //
}