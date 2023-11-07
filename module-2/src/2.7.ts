{
    //Generic constraint with keyof operator 

    type Vehichal ={
        bike: string;
        car: string;
        ship: string;
    }

    /* Jodi amar kono ekta type create korte hoi and oi type e bike, car, ship literal 
    vabe mane jekono ekta hobe uniqe hishe tahole amra two way te korte pari 
    1. manaully 
    2. keyof diye 
    */

    type Owner = 'bike'| 'car' | 'ship' //manually 

    // eitar mane hosse Vehichal type er key gulo diye ekta type create 
    type Owner2 = keyof Vehichal


    const person1 : Owner = 'car'; //ctrl + shift dile auto key suggesion ashbe 


    //important
    const  getPeropertyValue =<X, Y extends keyof X > (obj:X,key: Y)=>{

    }

   
    const user = {
        name: 'Imam',
        age: 33,
        address: 'Japan',

    }
    const car = {
        model: 'Toyota',
        year: 2013,
        

    }
    const res1 = getPeropertyValue(car, 'model')



    
    








    //
}