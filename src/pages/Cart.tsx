import { Heading } from "@components/common";
import { CartItem, CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { actGetProductsByItems } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

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

  return (
    <>
      <Heading>Cart</Heading>
      <Loading status={loading} error={error}>
        <>
          <CartItemList products={products} />
          <CartSubtotalPrice />
        </>
      </Loading>
    </>
  );
};

export default Cart;
