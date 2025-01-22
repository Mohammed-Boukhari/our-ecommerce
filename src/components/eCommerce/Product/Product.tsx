import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { Button } from "react-bootstrap";
import { TProduct } from "@customTypes/product";
import styles from "./style.module.css";

const { product, productImg } = styles;

const Product = ({ title, price, img, id }: TProduct) => {
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(id));
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price}</h3>
      <Button
        onClick={ addToCartHandler}
        variant="info"
        style={{ color: "white" }}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
