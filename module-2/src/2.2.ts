{
    //Interface 

    //type aliece 
    // shokol primitive type er khetre amra type aliece use korbo karon interface e primitive use kora jai na
    type User1 = {
        name: string;
        age: number
    }

    //interface 
    // Object er khete amra type aliece and interface dui tai use korte parbo
    interface User2 {
        name: string;
        age: number;
    }

   


    // type intersection

    type userWithRole1 = User1 & {role: string}

    const user1 : userWithRole1 ={
        name: 'imam',
        age:25,
        role: 'manager'
    }


    // interface intersection

    interface userWithRole2 extends User2 {
        role: string
    }

    const user2 : userWithRole2 ={
        name: 'rahim',
        age:27,
        role: 'employee'
    }


     /*
    NOTE:
    - type k extent korte & use korte hobe 
    - interface k extent korte hoile extends use korte hobe 
    
    */








    //js-->object, array-->object, function-->object

    type Roll1 = number[];
    interface Roll2 {
        [index : number]: number
    }

    const rollNumber: Roll2 =[1,2,3]




    // function

    type Add1 = (num1:number, num2: number) => number;

    interface Add2 {
        (num1: number, num2:number): number
    }

    const add:Add2 =(num1, num2)=> num1 + num2;

    //
}