import styles from "./styles.module.css";
import ToastItem from "./ToastItem";
const { toastList } = styles;

const ToastList = () => {
  return (
    <div className={toastList}>
      <ToastItem />
      <ToastItem />
    </div>
  );
};

export default ToastList;
