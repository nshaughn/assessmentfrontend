import React from 'react';
import { faker } from '@faker-js/faker';

const FruitCard = ({ fruit: { nutritions: { calories, protein, sugar }, name, id, price } }) => {
    price = Math.ceil(faker.datatype.number() / 10000)
    return (
        <div>
                <div className='fruit' key={id}>
                    <div>
                        <h1>{name}</h1>
                        <p>Calories: {calories}kcal</p>
                        <p>Protein: {protein}g</p>
                        <p>Sugar: {sugar}g</p>
                        <p>Price per portion: £{price}</p>
                    </div>
                </div>
        </div>
    )
}

export default FruitCard