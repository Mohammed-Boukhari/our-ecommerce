import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { TCategory } from "@customTypes/category";
const { category, categoryImg, categoryTitle } = styles;

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
