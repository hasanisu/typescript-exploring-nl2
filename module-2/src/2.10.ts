{
    //Mapped Types

    /*
    Mapped types er shahajje khub shohjei number theke string e change kore jai 
    */
    const arrayOfNumber: Number[] = [1,2,4];

    const arrayOfString : string[] = arrayOfNumber.map(number => number.toString())

    console.log(arrayOfString)



    type AreaNumber ={
        height: number;
        width: number;
    };

    type Height = AreaNumber['height'] // look up type

    // change to string by hardcorded

    // type AreaString ={
    //     height: string;
    //     width: string;
    // };



// .................................
    //change to string with mapped types
    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    // example T and Key ki thakbe 
    // T = >{height: string, width: number}
    // key=> T['width']


    //Generic 

    const area1 : AreaString<{height: string, width: number}>= {
        height: '100',
        width: 50,
    }









    //

}