{
    //Utility Type 

   

    type Person ={
        name: string;
        age: number;
        email?:string;
        contactNo: string;
    }


     // Pick type

    //Pick type Name = Pick<kar theke pick korbo,'kon property ke pick korbo'>
    type NameAge = Pick<Person,'name' | 'age'>


    //Omit type
    //Omit type hosse ekta type theke kisu parameter bad diye type banano  = Omit<kar theke pick korbo,'kon property ke Omit korbo'>
    type ContactInfo = Omit<Person, 'name'|'age'>


    //Required Type

    type PersonRequired = Required<Person>


    // Partial 
    type PersonPartial = Partial<Person>


    // Read Only
    type PersonReadOnly = Readonly<Person>

    const person1 : Person ={
        name: 'mr.xt',
        age:20,
        contactNo: '012354'
    }


    // Record Type 

    

    // type MyObj ={
    //     a: string;
    //     b: string;
    // }

    // type MyObj = Record<key, value>

    type MyObj = Record<string, string>

    const Empty : Record<string, unknown> ={}; // empty object declare with record 

    const obj1 : MyObj ={
        a: 'aa',
        b: 'bb',
        c:'cc'
    }



    //
}