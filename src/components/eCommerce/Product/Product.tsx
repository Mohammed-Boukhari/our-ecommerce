import { useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import { TProduct } from "@customTypes/product";

import styles from "./style.module.css";

const { product, productImg } = styles;

const Product = ({ title, price, img, id }: TProduct) => {
  const dispatch = useAppDispatch();

  const [isBTNClicked, setIsBTNClicked] = useState(0);
  const [isBTNDisabled, setIsBTNDisabled] = useState(false);

  useEffect(() => {
    if (!isBTNClicked) {
      return;
    }
    setIsBTNDisabled(true);
    const debounce = setTimeout(() => {
      setIsBTNDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBTNClicked]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBTNClicked((prev) => prev + 1);
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price}</h3>
      <Button
        onClick={addToCartHandler}
        variant="info"
        style={{ color: "white" }}
        disabled={isBTNDisabled}
      >
        {isBTNDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default Product;
