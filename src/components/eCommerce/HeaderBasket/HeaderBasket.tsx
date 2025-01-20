import Logo from "@assets/svg/cart.svg?react";
import style from "./style.module.css";

const { basketContainer, basketQuantity } = style;
const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}></div>
    </div>
  );
};

export default HeaderBasket;
