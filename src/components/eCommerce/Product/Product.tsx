import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import { TProduct } from "@customTypes/product";

import styles from "./style.module.css";

const { product, productImg, maximumNotice } = styles;

const Product = memo(({ title, price, img, id, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();

  const [isBTNDisabled, setIsBTNDisabled] = useState(false);

  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  useEffect(() => {
    if (!isBTNDisabled) {
      return;
    }

    setIsBTNDisabled(true);
    const debounce = setTimeout(() => {
      setIsBTNDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBTNDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBTNDisabled(true);
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>${price.toFixed(2)}</h3>
      <p className={maximumNotice}>
        {quantityReachedToMax
          ? "You reach to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
      <Button
        onClick={addToCartHandler}
        variant="info"
        style={{ color: "white" }}
        disabled={isBTNDisabled || quantityReachedToMax}
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
});

export default Product;
