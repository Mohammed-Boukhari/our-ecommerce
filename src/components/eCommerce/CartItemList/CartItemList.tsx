import { TProduct } from "@customTypes/product";
import CartItem from "../CartItem/CartItem";

type TCartItemListProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
};
const CartItemList = ({
  products,
  changeQuantityHandler,
}: TCartItemListProps) => {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
    />
  ));
  return <div>{renderList}</div>;
};

export default CartItemList;
