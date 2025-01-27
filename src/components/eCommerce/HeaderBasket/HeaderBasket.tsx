import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";

import Logo from "@assets/svg/cart.svg?react";
import style from "./style.module.css";

const { container, titleNum, pumpCartQuantity, iconWrapper } = style;

const HeaderBasket = () => {
  const navigate = useNavigate();
  // FIXME: ANIMATION To Cart Quantity and Quantity
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quantityStyle = `${titleNum} ${isAnimate ? pumpCartQuantity : ""}`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);
  // End ANIMATION ===//

  return (
    <div className={container} onClick={() => navigate("/cart")}>
      <div className={iconWrapper}>
        <Logo title="basket icon" />
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
