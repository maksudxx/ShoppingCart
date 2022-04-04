import React from "react";

const CartItem = ({ data, removeFromCart }) => {
  let { id, name, price, quantity } = data;
  console.table({ data });
  return (
    <div style={{ border: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} Total: ${price * quantity}
      </h5>
      <button onClick={() => removeFromCart(id)}>Quitar del carrito</button>
      <button onClick={() => removeFromCart(id, true)}>Quitar todo</button>
    </div>
  );
};

export default CartItem;
