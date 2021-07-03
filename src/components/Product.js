import React from 'react'

export const Product = (props) => {
    const { product, onAdd} = props;
    return (
        <div>
            <img src={product.img} width={150}/>
           <h3>{product.name}</h3>
           <div>${product.price}</div>
           <button onClick={()=>onAdd(product)}>Add to Cart</button>
        </div>
    )
}
