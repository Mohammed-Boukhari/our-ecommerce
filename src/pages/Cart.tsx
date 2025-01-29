import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import useCart from "@hooks/useCart";

const Cart = () => {
  const { products, changeQuantityHandler, removeItemHandler, loading, error } =
    useCart();

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
