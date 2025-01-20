import { Link } from "react-router-dom";
import styles from "./style.module.css";
const { category, categoryImg, categoryTitle } = styles;
interface IProps {
  title: string;
  img: string;
  prefix: string;
}

const Category = ({ title, img, prefix }: IProps) => {
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
