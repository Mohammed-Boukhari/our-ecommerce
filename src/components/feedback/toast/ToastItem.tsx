import { TToast } from "@store/toasts/toastsSlice";
import styles from "./styles.module.css";

const { toastItem } = styles;
type TTostItemProps = TToast;
const ToastItem = ({ message, type, title }: TTostItemProps) => {
  return (
    <div className={`alert alert-${type} ${toastItem}`}>
      <h5>{title}</h5>
      <p>{message}</p>
      <button className="btn-close"></button>
      <span className=" placeholder" style={{ width: "100%" }}></span>
    </div>
  );
};

export default ToastItem;
