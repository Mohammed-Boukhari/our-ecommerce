import { Button } from "react-bootstrap";
import { TProduct } from "@customTypes/product";

import styles from "./style.module.css";
const { product, productImg } = styles;

const Product = ({ title, price, img }: TProduct) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
