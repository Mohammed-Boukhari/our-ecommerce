import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import style from "./style.module.css";
const { container, titleNum, pumpCartQuantity, iconWrapper } = style;

type THeaderCounterProps = {
  totalQuantity: number;
  svgIcon: React.ReactNode;
  to: string;
  title: string;
};

const HeaderCounter = ({
  totalQuantity,
  svgIcon,
  to,
  title,
}: THeaderCounterProps) => {
  const navigate: NavigateFunction = useNavigate();
  // FIXME: ANIMATION To Cart Quantity and Quantity
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const quantityStyle: string = `${titleNum} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce:number = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);
  // End ANIMATION ===//

  return (
    // container Header counter
    <div className={container} onClick={() => navigate(to)}>
      {/* Icon Wrapper */}
      <div className={iconWrapper}>
        {/* svg Icon Components */}
        {svgIcon}
        {/* svg Icon Components */}

        {/* Total Quantity */}
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
        {/*=== Total Quantity ===*/}
      </div>
      {/*=== Icon Wrapper ===*/}

      {/* title Header counter */}
      <h3>{title}</h3>
      {/*=== title Header counter ===*/}
    </div>
  );
};

export default HeaderCounter;
