{
    //Generic type = genaralise type

    //Dynamic array 
    type GenericArray<T> = Array<T>

// const rollNumber : number[] = [1,3,5]
const rollNumber : GenericArray<number> = [1,3,5]

// const mentors : string[] = ['x', 'Y', 'Z']
const mentors : GenericArray<string> = ['x', 'Y', 'Z']

// const boolArray : boolean[] = [true, false, true]
const boolArray : GenericArray<boolean> = [true, false, true]


//simplify korar jonno type use korbo/ interface use korbo
// type User = {
//     name: string;
//     age: number;
// }
interface User {
    name: string;
    age: number;
}



const user :GenericArray<User> =[
    {
        name: 'Mezba',
        age: 100
    },
    {
        name: 'imam',
        age: 30
    }
]




//Generic Tuple 
//tuple lekhar niyom: ager ta jodi string hoy porer taw hobe, number er jonno same
type GenericTuple<X,Y> = [X , Y]

const manus:GenericTuple<string, string> = ['Mr. X', 'Mr. Y']

const userWithId : GenericTuple <number, {name:string, email:string}> 
= [1234, {name: 'imam', email: 'a@gmail.com'}]



    //
}