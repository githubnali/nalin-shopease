import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../store/cartSlice';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const cartList = useSelector((state) => state.cartState.cartList);
  const dispatch = useDispatch();
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
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
