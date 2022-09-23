import React from 'react';
import { faker } from '@faker-js/faker';

const FruitCard = ({ fruit: { nutritions: { calories, protein, sugar }, name, id, price } }) => {
    price = Math.ceil(faker.datatype.number() / 10000)
    return (
        <div>
                <div className='fruit' key={id}>
                    <div>
                        <div className='fruit_makeup'>
                            <h1>{name}</h1>
                        </div>
                        <div className='fruit_makeup'>
                            <p>Calories: {calories}kcal</p>
                            <p>Protein: {protein}g</p>
                            <p>Sugar: {sugar}g</p>
                        </div>
                    </div>


                    <div className='fruit_price'>
                        <p>Price per portion: <b>£{price}</b></p>
                        <p className='hulk'>⇨</p>
                    </div>

                </div>
        </div>
    )
}

export default FruitCard