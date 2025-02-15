import { TProduct } from "@types";
import styles from "./style.module.css";
type TCartSubtotalProps = { products: TProduct[] };

const CartSubtotalPrice = ({ products }: TCartSubtotalProps) => {
  const subtotalPrice = products.reduce((accumulator, el) => {
    const price = el.price;
    const quantity = el.quantity;

    if (quantity && typeof quantity === "number") {
      return accumulator + price * quantity;
    } else {
      return accumulator;
    }
  }, 0);

  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{subtotalPrice.toFixed(2)} EGP</span>
    </div>
  );
};

export default CartSubtotalPrice;
