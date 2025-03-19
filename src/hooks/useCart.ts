import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
  cartsFullInfoCleanUp,
} from "@store/cart/cartSlice";
import { resetOrderStatus } from "@store/orders/ordersSlice";

import { TLoading } from "@types";

const useCart = () => {
  const dispatch = useAppDispatch();

  const { items, productFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  const userAccessToken: string | null = useAppSelector(
    (state) => state.auth.accessToken
  );

  const placeOrderStatus: TLoading = useAppSelector(
    (state) => state.orders.loading
  );

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

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());
    return () => {
      promise.abort();
      dispatch(cartsFullInfoCleanUp());
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);

  return {
    products,
    loading,
    error,
    userAccessToken,
    placeOrderStatus,
    changeQuantityHandler,
    removeItemHandler,
  };
};

export default useCart;
