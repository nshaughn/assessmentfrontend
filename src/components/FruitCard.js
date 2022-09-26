import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const FruitCard = ({ fruit: { nutritions: { calories, protein, sugar }, name, id, price } }) => {
    let selected = []
    // const [smoothie, setSmoothie] = useState([])
    // // const [total, setTotal] = useState(0)
    
    const handleClick = (name) => {
        console.log(name)
        selected.push(name)
        console.log(selected)
        return selected
        // if(!fruit.)
        // // setSmoothie([...smoothie])
        // return name
    }

    // useEffect(() => {
    //     let num = 0
    //     for (let i = 0; i < smoothie.length; i++){
    //         num += Number(smoothie[i].name)
    //     }
    //     setTotal(num.toFixed[2])
    // }, [smoothie, setTotal])

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


                    <div className='fruit_price' onClick={() => handleClick(name)}>
                        <p>Price per portion: <b>£{price}</b></p>
                        <p className='hulk'>⇨</p>
                    </div>

                </div>
        </div>
    )
}

export default FruitCard