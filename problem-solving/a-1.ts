{
    // Problem 1:
    const stringOrNumber = (parameter: string | number) => {
        if (typeof parameter === 'string') {
            return parameter.length;
        } else if (typeof parameter === 'number') {
            const num = parameter * parameter;
            return num
        }

    }

    const result = stringOrNumber('Programming-hero');


    // Problem 2:
    interface Person {
        name: string
        address?: {
            city: string;
            street: string;
        };
        phone?: string;
    }

    const unknowPerson: Person = {
        name: 'hasan',
        address: {
            city: 'Tokyo',
            street: 'aoto-5'
        },
        phone: '012346789',
    }


    const getAddressCity = (person: Person) => {
        return person.address?.city
    }

    const res = getAddressCity(unknowPerson)



    // Problem 3:
    class Animal {
        name: string;
        color: string;

        constructor(name: string, color: string) {
            this.name = name;
            this.color = color;
        }
    }


    class Cat extends Animal {

        specis: string;
        constructor(name: string, color: string, specis: string) {
            super(name, color);
            this.specis = specis
        }
    }


    class Mouse extends Animal {
        constructor(name: string, color: string,) {
            super(name, color);
        }
    }

    const cat = new Cat('Tom', 'black and white', 'mew mew ')
    const mouse = new Mouse('Jerry', 'black and white')



    const isCat = (animal: Animal) => {
        if (animal instanceof Cat) {
            return 'yes, it`s a cat'
        } else {
            return 'no, it`s not a cat'
        }
    }

    const res1 = isCat(cat)
    


    // Problem 4:
    type MixedData<T> = Array<T>

    const mixedData : MixedData<number | string> = [1,'two', 3, 'four', 5];

    const addFunction =<T>(param: MixedData<T>):number =>{
        let sum = 0;
        param.forEach((number)=>{
            if(typeof number === 'number'){
                sum = sum + number; 
            }else {
                sum
            }
    
        });
        return sum;

        
    }
    const res3 = addFunction(mixedData)
    

    // Problem 5:

    interface Car {
        model: string;
        year: string;
    }

    interface Driver{
        name:string;
        licenseNumber: string;
    }

    const carInfo : Car ={
        model: 'Toyota',
        year: '2013',
    }
    const driverInfo : Driver ={
        name: 'Hasan',
        licenseNumber: '201345876',
    }

    // const keyValueArray :[string, any][]=[carInfo, driverInfo]

   const makeObject = (hi:Car , hello:Driver) =>{

   }

    
   console.log(makeObject(carInfo, driverInfo))
    


}