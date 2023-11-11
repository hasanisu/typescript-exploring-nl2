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
        year: number;
    }

    interface Driver{
        name:string;
        licenseNumber: number;
    }

    const carInfo : Car ={
        model: 'Toyota',
        year: 2013,
    }
    const driverInfo : Driver ={
        name: 'Hasan',
        licenseNumber: 201345876,
    }

    // const keyValueArray :[string, any][]=[carInfo, driverInfo]

   const makeObject = (car:Car , driver:Driver) =>{
    // using spread operator 
    const mentors = {
        ...car,
        ...driver
    }
    return mentors
   }

   const obj = makeObject(carInfo, driverInfo)
//    console.log(obj)
    
   //Problem-6
   const arrayOfNumber : Array<number | string> = [1,2,3,4]


   const checkingIsArray =(arr:unknown)=>{
    const isArray = Array.isArray(arr)
    
    if(isArray && arr.every((items) => typeof items === 'number')){
        let sum = 0;
        arr.forEach((num) => {
            const hello = sum + num;
            sum = hello 
        })
        //  console.log('sum number of Array :', sum)
    }else {
        // console.error('this is not a number of array')
    }
    
   }

   checkingIsArray(arrayOfNumber)
   
   // problem-7

   type ArrayOfChoice<T> = Array<T>;
   const numbers : ArrayOfChoice<number> = [1,2,3,4,5,6]
   const string : ArrayOfChoice<string> = ["apple", "banana", "cherry", "date", "apple"];

   const targetNumber = 2;
   const targetString = "cherry";

   const findFirstOccurrence =<T>(array:T[], searchOf :T)=>{
    
    const checkArrayOfIndex = array.indexOf(searchOf)
    return checkArrayOfIndex;
   }

   const indexRes = findFirstOccurrence(string, targetString)
   console.log(indexRes)


   /*
Answer-1 
There are some benefits of using typescript below
1. Organized code in the project
2. find out the bug in read time.
3. There are very few error because of mention the type of the value;

Answer-2 
1. Optional Chaining: If a parameter of object is available then give the result if 
    not available then there is no error occurred.

    const anObJ = {
        name: 'XYZ',
        phone: '012345'
        email:'z@gmail.com' 
        address: {
            city: 'Dhaka',
            street: '56/c,
            houseName?:''
        }
    }
    console.log(anOBJ.address?.hoseName?)

    2. Nullish Coalescing Operator 
    you have to take a decision when you get the null and undefine and you have 
    to set a default value

    const isAdmin = null:
    const res = isAdmin ?? 'user'

    Answer - 3

    async programming allow code to run in the 
    behind while the rest of the program continues to execute.


    Answer - 4
    When we need to use a specific data type status like, account are active or not
    that time we use enum; 

    enum AccountStatus {
   status= Active;
   }
    
   we can easily understand the account status.

   Answer - 5 

   type or parameter checking is the main role is type guard.




   Answer - 6

   const student ={
    readOnly school: 'programming-hero',
    name: 'XYZ',
    id : '123'
   }

   we cannot change the property value when we mention the readOnly



   Answer - 7

   Union type is a type where you can use any type with this symbol | , 
   For Example;
   type IsValue: number | string | Boolean ; 

*/

}