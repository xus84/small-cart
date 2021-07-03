import React from "react";

export const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  return (
    <div>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
            <div>{item.name}</div>
            <div>
                <button onClick={()=>onAdd(item)} className="add" >+</button>
                <button onClick={()=>onRemove(item)} className="remove" >-</button>
            </div>
            <div>
                {item.qty} x ${item.price.toFixed(2)}
            </div>
        </div>  
      ))}
    </div>
  );
};
