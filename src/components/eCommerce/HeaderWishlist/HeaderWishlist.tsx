import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Wishlist from "@assets/svg/wishlist.svg?react";

import style from "./style.module.css";

const { container, titleNum, pumpAnimate, iconWrapper } = style;

const HeaderWishlist = () => {
  const navigate = useNavigate();
  // FIXME: ANIMATION To Cart Quantity and Quantity
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = 0;
  const quantityStyle = `${titleNum} ${isAnimate ? pumpAnimate : ""}`;

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
        <Wishlist />
        {totalQuantity > 0 ? (
          <div className={quantityStyle}>{totalQuantity}</div>
        ) : null}
      </div>
      <h3>wishlist</h3>
    </div>
  );
};

export default HeaderWishlist;
