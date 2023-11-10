
type User = {
    id: number;
    name: string
}


const users: Array<User> = [
    {
        id: 12,
        name: 'Imam'
    },
    {
        id: 13,
        name: 'Hasan'
    },
    {
        id: 14,
        name: 'Md'
    },
]

// ei function e T ta use hoyese generic r K ta hosse T er key 

function getArrayOfAnObject<T, K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map((obj => obj[key]))
}

console.log('extrated array :', getArrayOfAnObject(users, 'name'))