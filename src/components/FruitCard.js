import React from 'react'

const FruitCard = ({fruit: { nutritions: {calories, protein, sugar}, name, id, family, genus } })=>{
    return (
        <div className='fruit' key={id}>
                <div>
                    <h1>{name}</h1>
                    <p>Calories: {calories}</p>
                    <p>Protein: {protein}</p>
                    <p>Sugar: {sugar}</p>
                </div> 

                <div>
                    <h2>{family}</h2>
                </div>

                <div>
                    <p>{genus}</p>
                </div>
        </div>

    )
}

export default FruitCard