import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const FruitCard = ({ fruit: { nutritions: { calories, protein, sugar }, name, price }, list, setList, index }) => {
    // const [selected, setSelected] = useState([])
    // // const [total, setTotal] = useState(0)
    // const [list, setList] = useState()

    const handleClick = (name) => {
        setList([...list, name])
        console.log(list)
    }

    // useEffect(() => {
    //     let num = 0
    //     for (let i = 0; i < smoothie.length; i++){
    //         num += Number(smoothie[i].name)
    //     }
    //     setTotal(num.toFixed[2])
    // }, [smoothie, setTotal])

    price = Math.ceil(faker.datatype.number() / 40000)
    return (
        <div>
            <div className='fruit' key={index}>
                <div>
                    <div className="fruit_list_image" >
                      <img src={require(`../images/fruitlist/${name}.png`)} alt={`Image of a(n) ${name}`} />
 

                    <div className='fruit_makeup'>
                        <h1>{name}</h1>
                    </div>
                    <div className='fruit_makeup'>
                        <p>Calories: {calories}kcal</p>
                        <p>Protein: {protein}g</p>
                        <p>Sugar: {sugar}g</p>


                    </div>
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
