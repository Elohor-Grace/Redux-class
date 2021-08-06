import React from 'react'

function card(props) {
    return (
        <div>
            <h2>{console.log(props.myProduct)}</h2>
            <p>{props.myProduct.title}</p>
            <p>{props.myProduct.description}</p>
            <p>{props.myProduct.price}</p>
            <button onClick={props.myClick}>Add to Cart</button>
            
            
        </div>
    )
}

export default card
