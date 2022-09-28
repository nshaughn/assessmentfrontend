import React from 'react';
import { faker } from '@faker-js/faker';

const FruitCard = ({ fruit: { nutritions: { calories, protein, sugar }, name }, list, setList, index, price }) => {

    price = Math.ceil(faker.datatype.number() / 10000)

    const handleClick = (name) => {
        setList([...list, name])
        console.log(list)
    }
    
    return (
        <div>
            <div className='fruit' key={index}>
                <div className="fruit_list_image" >
                    <img src={require(`../images/fruitlist/${name}.png`)} alt={`${name}`} />
                </div>
                <div className='fruit_makeup'>
                    <h1>{name}</h1>
                </div>
                <div className='fruit_makeup'>
                    <p>Calories: {calories}kcal</p>
                    <p>Protein: {protein}g</p>
                    <p>Sugar: {sugar}g</p>
                </div>
                <div className='fruit_price' onClick={() => handleClick(name)}>
                    <p>Price per portion: <b>£{price}</b></p>
                    <p className='hulk'>⇨</p>
                </div>
            </div>
        </div>

    )
}

export default FruitCard
