import React, { useReducer } from "react";
import { TYPES } from "../../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../../reducer/shoppingReducer";
import CartItem from "../cartItem/CartItem";
import ProductItem from "../productItem/ProductItem";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  //console.table(products)
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const removeFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAN_CART });
  };
  return (
    <div>
      <h1>Carrito de Compras</h1>
      <h3>Productos</h3>
      <article className={styles.box}>
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className={styles.box}>
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} removeFromCart={removeFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
