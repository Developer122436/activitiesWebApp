import React from 'react'
import { ICar } from './demo'
// This is not necessery on JS component - we write IProps to ensure type safety.
// Because of typescript we have intellisense and we can know when errors happens on program.
interface IProps {
    car: ICar
}
// We need to pass generic type parameters for the properties that were going to receive from 
// the parent component(<IPros>)
const CarItem: React.FC<IProps> = ({car}) => {
    return (
        <div>
            <h1>{car.color}</h1>
        </div>
    )
}

export default CarItem
