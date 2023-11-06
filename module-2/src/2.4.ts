{
    //Interface---generic

    interface Developer<T, X = null> { //X= null, default vabe null thakbe 
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike? : X;
    }


    type AppleWatch1 = {
        brand: string;
        model:string;
        display:string;
    }


    const poorDeveloper : Developer<AppleWatch1> = {
        name: 'imam',
        computer:{
            brand: 'Acer',
            model: 'x255tr',
            releaseYear: 2018
        },
        smartWatch: {
            brand: 'Apple',
            model: '2022',
            display: 'oled',
        }
    }


    interface AppleWatch2  {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface BmwBike {
        brand: string;
        year: number;
    }

    const richDeveloper : Developer<AppleWatch2, BmwBike> = {
        name: 'Rich Dev',
        computer:{
            brand: 'Mac',
            model: 'x255tr',
            releaseYear: 2023
        },
        smartWatch: {
            brand: 'Apple Ultra',
            model: '2022',
            heartTrack: true,
            sleepTrack: true,

        },
        bike: {
            brand: 'BMW',
            year: 2023
        }
    }


    //
}