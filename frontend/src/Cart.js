import React, { Component } from "react";

const Cart = (props) => {
  const { cartItems, removeFromCart } = props;
  const cartItemList = cartItems.map((item, index) => (
    <li key={index}>
      {item.name} - {item.price}
      <button
        className="btn btn-sm btn-danger ms-2"
        onClick={() => removeFromCart(index)}
      >
        Remover
      </button>
    </li>
  ));

  return (
    <div className="mt-5">
      <h3>Seu Carrinho</h3>
      <ul className="cartList">{cartItemList}</ul>
    </div>
  );
};

export default Cart;
