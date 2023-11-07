{
    // Type Assertion 
/* 
Example: Jodi ami as a developer, typescript er theke jodi type ami valo declare korte 
pari takei type assertion bole 
*/
let anything: any; // ei khane kono nirdishto type declare kora hoinai jonno jekono type boshate pari

anything = "Next Level Web Development"; // anything k ekta string hishe declare koreci

(anything as string).charAt //ami sure j anything ekta string tai anythink k string hishebe declare koreci 
                     //and eita first braket er moddhe rekhe pore . dile eitar moddhe string er shob type chole ashbe 
                     // same to same number er khetrew hobe.

/* kgtogm er opor hover korle dekha jabe j eita ekta string or number or undefin 
return kore tai amra specific vabe bole debo : string | number | undefined*/
const kgToGm = (value: string | number) : string | number | undefined =>{
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value)*1000;
        return `The converted value is : ${convertedValue}`
    }
    if(typeof value === 'number'){
        return value * 1000;
    }
 
}

//Note: 
/* ami pretty sure je result1 e jodi ami number dei 
tahole she number e return korbe tai ami as number 
hisheb take declare koreci. same string er khetrew */

const result1 = kgToGm(1000) as number 
const result2 = kgToGm('1000') as string


/* 
Note: 
try catch e error message take (error.message) ei vabe declare kora jai na jonno amra 
niche ekta type declare koreci and object hishebe message take dekhiye.
*/
type CustomError ={
    message : string
}

try{

}catch(error){
    console.log((error as CustomError).message);
}






}