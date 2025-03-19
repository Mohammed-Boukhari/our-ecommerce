import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading, LottieHandler } from "@components/feedback";
import useCart from "@hooks/useCart";

const Cart = () => {
  const {
    products,
    loading,
    error,
    userAccessToken,
    placeOrderStatus,
    changeQuantityHandler,
    removeItemHandler,
  } = useCart();

  return (
    <>
      <head>
        <title>our eCommerce | Cart</title>
      </head>

      {/* Heading title */}
      <Heading title={"Cart"} />
      {/*=== Heading title ===*/}

      <Loading status={loading} error={error} type="cart">
        <>
          {products.length ? (
            <>
              <CartItemList
                products={products}
                changeQuantityHandler={changeQuantityHandler}
                removeItemHandler={removeItemHandler}
              />
              <CartSubtotalPrice
                products={products}
                userAccessToken={userAccessToken}
              />
            </>
          ) : placeOrderStatus === "succeeded" ? (
            <LottieHandler
              type={"success"}
              message="Your order has been placed successfully"
            />
          ) : (
            <LottieHandler type={"empty"} message="Your cart is empty" />
          )}
        </>
      </Loading>
    </>
  );
};

export default Cart;
