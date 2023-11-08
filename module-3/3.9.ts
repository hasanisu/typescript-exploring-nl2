{
    //Abstraction 
    /*
    Two type abstraction: 1. Interface 2. abstract
    
    */

    //1. Interface 
    //idea 
   interface Vehicle1 {
    startEngine():void;
    stopEngine():void;
    move():void;
   }

//    const Vehicle1 : Vehicle = {
//     name: 'Toyota',
//     model: 20121
//    }


//real implementation 
class Car1 implements Vehicle1 {
    startEngine(): void {
        console.log('I am starting the car engine')
    }
    stopEngine(): void {
        console.log('I am stop the car engine')
    }
    move(): void {
        console.log('I am moving the car engine')
    }

    test(){
        console.log('i am just testing')
    }
}

const toyota = new Car1();
toyota.startEngine();




//2. Abstract class----idea
// abstract class k follow kora jabe but instense diye onno class create kora jabe na, follow korte hoile child class create kora jabe

//idea
abstract class Car2 {
   abstract startEngine(): void ;
   abstract stopEngine(): void ;
   abstract move(): void ;
}

class ToyotaCar extends Car2{

    startEngine(): void {
        console.log('ima starting')
    };
    stopEngine(): void {
        console.log('ima stopping')
    };
    move(): void {
        console.log('ima mov')
    };
}






    //
}