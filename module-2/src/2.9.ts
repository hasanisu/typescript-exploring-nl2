{
    //Conditional Type
    /*
    Conditional type ta hosse, kono ekta type onno ekta type oper nirvor kore kisu ekta korbe.
    example: niche 
    */

    type A1 = number ;
    type B1 = string;

    //  A1 type jodi null or null er shoman hoi tahole true r A1 er man jodi number ba onno kisu hoi tahole eita false; 
    type X = A1 extends null ? true : false;

    type Y = A1 extends null ? true : B1 extends undefined ? undefined : any;


    type Sheikh ={
        bike : string;
        car: string;
        ship: string;
    }

    type CheckVehical<T> = T extends keyof Sheikh ? true : false;

    type Hasship = CheckVehical<'ship'>

    //
}