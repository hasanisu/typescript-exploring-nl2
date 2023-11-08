{
    //Instance of Guard 

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species:string){
            this.name=name,
            this.species=species
        }

        makeSound(){
            console.log('I am making sound')
        }
    }

    //Inheritance kore parent class theke child class kora 

    class Cat extends Animal{
        constructor(name:string, species:string){
            super(name, species)
        }

        makeMew(){
            console.log('i am mewing')
        }
    }

    class Bird extends Animal{
        constructor(name:string, species:string){
            super(name, species)
        }

        makeChew(){
            console.log('i am chewing')
        }
    }

   

    // Class er instance crete koreci 
    const cat = new Cat('Cat Bhai', 'Cat')
    const bird = new Bird('Bird Bhai', 'bird')
   
    

 //ekta function declare koreci and Animal class take as a type hishebe use koreci 
 const getAnimal =(animal: Animal)=>{
    // check inastance 
    if(animal instanceof Cat){
        animal.makeMew()
    }else if(animal instanceof Bird){
        animal.makeChew();
    }else{
        animal.makeSound();
    }
}

getAnimal(cat)






// Samrt way te handle korar jonne chile amra function bebohar korte pari 

const isCat =(animal:Animal): animal is Cat =>{
    return animal instanceof Cat
}
const isBird =(animal:Animal): animal is Bird =>{
    return animal instanceof Bird
}
   
const getAnimals =(animal: Animal)=>{
    // check inastance 
    if(isCat(animal)){
        animal.makeMew()
    }else if(isBird(animal)){
        animal.makeChew();
    }else{
        animal.makeSound();
    }
}









    //
}