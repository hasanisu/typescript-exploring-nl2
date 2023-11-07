{
    //OOP-> OBJECT ORIANTED PROGRAMMING 

    // class
    class Animal {
    //    public name :string;
    //    public species: string;
    //    public sound: string;

       // parameter properties 
    /*
    parameter propety ta hosse property er age public 
    ta mention kore dile r double code korte hobe na 
    */

        constructor(public name:string, public species:string, public sound:string){
            // this.name=name;
            // this.species=species;
            // this.sound=sound;
        }

        //Arrow function e dist kaj korena tai normal function use kkorte hobe 

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const cat = new Animal('German Cat', 'cat', 'mew mew');
    const bird = new Animal('sky bird', 'bird', 'chew chew');
    cat.makeSound();







    //
}