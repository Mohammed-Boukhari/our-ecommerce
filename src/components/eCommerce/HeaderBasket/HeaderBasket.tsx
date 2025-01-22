import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantity } from "@store/cart/cartSlice";

import Logo from "@assets/svg/cart.svg?react";
import style from "./style.module.css";

const { basketContainer, basketQuantity } = style;

const HeaderBasket = () => {
  const cartItems = useAppSelector(getCartTotalQuantity);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{cartItems}</div>
    </div>
  );
};

export default HeaderBasket;
