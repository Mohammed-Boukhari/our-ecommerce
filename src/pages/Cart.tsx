import { Heading } from "@components/common";
import { CartItem, CartSubtotalPrice } from "@components/eCommerce";
import { actGetProductsByItems } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useAppDispatch;

  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  return (
    <>
      <Heading>Cart</Heading>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartSubtotalPrice />
    </>
  );
};

export default Cart;
