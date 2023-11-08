{
    // Gratter and setter 

    /*
    kono ekta function k propety er moto kore pabo 
    */




    class BackAccount {
       public readonly id: number;
       public  name:string;
    //    private _balance: number;
       protected _balance: number;

        constructor(id:number, name:string, balance:number){
            this.id = id;
            this.name=name;
            this._balance=balance;
        }


        //Setter (set kora)
        set deposit (amount:number){
            this._balance=this._balance + amount;
        }

        // public addDeposit(amount:number){
        //     this._balance = this._balance + amount;

        // }

        // Getter (get kora)
        get balance (){
            return this._balance
        }


        // public getBalance(){
        //     return this._balance;
        // }

    }


    class StudentAccount extends BackAccount{
        test(){
            this
        }
    }

    const goribManush = new BackAccount (111, 'Mr.Gorid', 50)
    // goribManush.addDeposit(30); // deposit korar jonno function call korte hosse 
    // const myBalance = goribManush.getBalance();// balace janar jonno function call korte hosse

    goribManush.deposit= 50; //kono overwirte kortese na 
    const myBalance = goribManush.balance; // propety er moto kore 
    console.log(myBalance);
   








    //
}