import CartIcon from "@assets/svg/cart.svg?react";
import WishlistIcon from "@assets/svg/wishlist.svg?react";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import HeaderCounter from "../HeaderCounter/HeaderCounter";

import styles from "./style.module.css";
const { headerLeftBar } = styles;

const HeaderLeftBar = () => {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  return (
    <>
      <div className={headerLeftBar}>
        <HeaderCounter
          totalQuantity={wishlistTotalQuantity}
          svgIcon={<WishlistIcon title={"Wishlist"} />}
          to={"/wishlist"}
          title={"Wishlist"}
        />
        <HeaderCounter
          totalQuantity={cartTotalQuantity}
          svgIcon={<CartIcon title={"cart"} />}
          to={"/cart"}
          title={"cart"}
        />
      </div>
    </>
  );
};

export default HeaderLeftBar;
