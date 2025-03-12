import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";

import HeaderCounter from "../HeaderCounter/HeaderCounter";

/*svg component*/ import WishlistIcon from "@assets/svg/wishlist.svg?react";
/*svg component*/ import CartIcon from "@assets/svg/cart.svg?react";

import styles from "./style.module.css";

const { headerLeftBar } = styles;

const HeaderLeftBar = () => {
  const wishlistTotalQuantity: number = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );

  const cartTotalQuantity: number = useAppSelector(
    getCartTotalQuantitySelector
  );
  return (
    <>
      {/* Header Left Bar */}
      <div className={headerLeftBar}>
        {/* FIXME: Header Counter Wishlist */}
        <HeaderCounter
          totalQuantity={wishlistTotalQuantity}
          svgIcon={<WishlistIcon title={"Wishlist"} />}
          to={"/wishlist"}
          title={"Wishlist"}
        />
        {/*=== Header Counter Wishlist  ===*/}

        {/* FIXME: Header Counter Cart Total */}
        <HeaderCounter
          totalQuantity={cartTotalQuantity}
          svgIcon={<CartIcon title={"cart"} />}
          to={"/cart"}
          title={"cart"}
        />
        {/*=== Header Counter Cart Total ===*/}
      </div>
      {/* Header Left Bar */}
    </>
  );
};

export default HeaderLeftBar;
