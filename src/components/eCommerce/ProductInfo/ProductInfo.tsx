import styles from "./style.module.css";

type ProductInfoProps = {
  title: string;
  img: string;
  price: number;
  direction?: "column" | "row";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const ProductInfo = ({
  img,
  price,
  title,
  direction = "row",
  children,
  style,
}: ProductInfoProps) => {
  return (
    <div className={`${styles[`product-${direction}`]}`} style={style}>
      <div className={`${styles[`productImg-${direction}`]}`}>
        <img src={img} alt={title} />
      </div>
      <div className={`${styles[`productInfo-${direction}`]}`}>
        <h2 title={title}>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        {children}
      </div>
    </div>
  );
};

export default ProductInfo;
