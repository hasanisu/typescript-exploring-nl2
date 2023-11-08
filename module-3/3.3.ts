{
    //type guard 

    /*
    Kono ekta type check kore forward howa 
    */

    //typeof ---->type guard 

    //code ta clean korar jonno ekta type declare korci 
    type Alphaneumeric = string | number;

    const add = (
        // param1:string | number, 
        // param2:string | number
        param1:Alphaneumeric, 
        param2:Alphaneumeric
        ): Alphaneumeric => {
        
        if(typeof param1 === 'number' && typeof param2 === 'number'){

            return param1 + param2;
        }
        else {
           return param1.toString() + param2.toString()
        }
    }
    const result1 = add(2, '3')
   

    //in Guard diye checking 

    type NormalUser ={
        name: string
    }

    type AdminUser = {
        name: string;
        role: 'Admin'
    }

    const getUser =(user: NormalUser | AdminUser)=>{
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        }else{
            console.log(`My name is ${user.name}`)
        }
    }

    const normalUser: NormalUser ={
        name: 'Hasan'
    };
    const adminUser : AdminUser={
        name: 'Imam',
        role: 'Admin'
    }

    getUser(adminUser)






    //
}