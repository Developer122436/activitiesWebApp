// We defined isolatedModules as false.
//let data: number;
//let data: number | string;
let data: any;
data = 10;
// interface will define the structure of object
export interface ICar {
    color: string;
    model: string;
    // ? is decalare optional
    topSpeed?: number;
}
const car1: ICar = {
    color: 'blue',
    model: 'BMW'
}

const car2: ICar = {
    color: 'red',
    model: 'Mercedes',
    topSpeed: 100
}
// Need to define type of parameters and return (void is default return)
const multiply = (x: number, y: number) => {
    x*y
}
// This is mentioned for the use on react application.
export const cars = [car1, car2];