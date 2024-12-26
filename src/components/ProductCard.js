import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const { id, name, price, image } = product;

  const [inCart, setInCart] = useState(false);
  useEffect(() => {
    const isProductInCart = cartList.find((item) => item.id === id);
    if (isProductInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, id]);
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {inCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
