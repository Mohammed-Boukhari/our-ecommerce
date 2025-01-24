import { TProduct } from "@customTypes/product";
import CartItem from "../CartItem/CartItem";

type TCartItemListProps = { products: TProduct[] };
const CartItemList = ({ products }: TCartItemListProps) => {
  const renderList = products.map((el) => <CartItem key={el.id} {...el} />);
  return <div>{renderList}</div>;
};

export default CartItemList;
