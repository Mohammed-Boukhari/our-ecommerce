import { useCallback, useEffect } from "react";
import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
  cartsFullInfoCleanUp,
} from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, productFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetProductsByItems());
    return () => {
      dispatch(cartsFullInfoCleanUp());
    };
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

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  return (
    <>
      <Heading title={"Cart"} />
      <Loading status={loading} error={error}>
        <>
          {products.length === 0 ? (
            "Your cart is empty"
          ) : (
            <>
              <CartItemList
                products={products}
                changeQuantityHandler={changeQuantityHandler}
                removeItemHandler={removeItemHandler}
              />
              <CartSubtotalPrice products={products} />
            </>
          )}
        </>
      </Loading>
    </>
  );
};

export default Cart;
