{
    //Access Modifires

    /*
    class er property er age private dile eitar value baire theke modifiy kora 
    jabena as safety purpose. eitake modify korte hole class er vitore ekta method
    call kore modify kora jabe.
    */

    // Important Note: 
    // Private : Jodi kono ekta property shudhu matro ekta class ei avaliable thakbe tokhn private use korbo
    //Protector: Jodi kono ekta property parent class and child class ew availabl thekbe tokn protector use korbo


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


        public addDeposit(amount:number){
            this._balance = this._balance + amount;

        }

        public getBalance(){
            return this._balance;
        }

    }


    class StudentAccount extends BackAccount{
        test(){
            this
        }
    }

    const goribManush = new BackAccount (111, 'Mr.Gorid', 20)
    // goribManush.balace = 0; eita bahir theke modify kora jabe na. class er vitore kote hobe
    goribManush.addDeposit(30);
    const myBalance = goribManush.getBalance();
    console.log(myBalance)








    //
}