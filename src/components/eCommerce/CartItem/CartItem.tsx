import { Button } from "react-bootstrap";
import styles from "./style.module.css";
import { TProduct } from "@customTypes/product";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

type TCartItemProps = TProduct;

const CartItem = ({ title, img, price }: TCartItemProps) => {
  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <div className={productInfo}>
          <h2>{title}</h2>
          <h3>{price.toFixed(2)} EGP</h3>
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
            onClick={() => "removeItemHandler(id)"}
          >
            Remove
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        {/* <Form.Select value={quantity} onChange={changeQuantity}>
          {renderOptions}
        </Form.Select> */}
      </div>
    </div>
  );
};

export default CartItem;
