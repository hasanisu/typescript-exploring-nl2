{
    //Constranits---enforce kora 

    //NOTE: jokon kisu reqire property must thakte hobe tokhn amra constrints use korbe

    /*constraints ta hosse generic er moddhe complesary property gulo diye dewa. 
    example <T extends {id: number, name: string, 
        email: string}>

        T hosse generic ar object ta hosse complesary property
    */

    const addCourseToStudent =<T extends {id: number, name: string, 
        email: string}> (student: T) =>{

        const course ='Next Level Web Development'
    
        return {
            ...student,
            course
        }
    }

    const student3 = addCourseToStudent ({id: 444, name: 'Mr. Z', email:'z@gmail.com'})
    const student1 = addCourseToStudent({id: 222, name: 'Mr X', email:'x@gmail.com', devType:'NLWD'})
    const student2 = addCourseToStudent({id:456, name: 'Mr Y', email:'Y@gmail.com', hasWatch: 'Apple'})




    //
}