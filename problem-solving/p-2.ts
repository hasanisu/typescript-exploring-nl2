// key value array

const keyValueArray :[string, any][] =[
    ['id', 23],
    ['name', 'Hasan'],
    ['isMarried', true]
]

// // reduce ((
//     finalValue, 
//     currentValue,
// )=>{}, initialValue)

function arrayToObject<T extends string, U>(array: [T, U][]): Record<T, U> {
    const transformedObject = array.reduce((finalObj, [key, value]
    )=>{
        finalObj[key] = value;
        return finalObj
    }, {} as Record<T, U>)
    
    return transformedObject
    
}