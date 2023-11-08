{
    //Static 
    /* Memory change hoi na  */

    /*
    Jodi kono property er shamen static thake tahole take oi property er class er name dhore call korte hobe 
    */

    // class Counter {
    //     static count : number = 0;
    //     increment(){
    //         return Counter.count = Counter.count + 1;
    //     }
    //     decrement(){
    //         return Counter.count = Counter.count - 1;
    //     }
    // }

    class Counter {
        static count : number = 0;
       static increment(){
            return Counter.count = Counter.count + 1;
        }
       static decrement(){
            return Counter.count = Counter.count - 1;
        }
    }

    // create instance 
    const instace1 = new Counter();
    console.log(Counter.increment())//1 return -. differnet memory te track korce 

    const instace2 = new Counter();
    console.log(Counter.increment())//1 return -. differnet memory te track korce 







    //
}