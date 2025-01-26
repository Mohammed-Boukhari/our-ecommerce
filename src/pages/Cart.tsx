import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
} from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, productFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  const products = productFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  return (
    <>
      <Heading>Cart</Heading>
      <Loading status={loading} error={error}>
        <>
          <CartItemList
            products={products}
            changeQuantityHandler={changeQuantityHandler}
          />
          <CartSubtotalPrice />
        </>
      </Loading>
    </>
  );
};

export default Cart;
