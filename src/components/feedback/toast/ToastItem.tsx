import { useAppDispatch } from "@store/hooks";
import { removeToast } from "@store/toasts/toastsSlice";

import styles from "./styles.module.css";
import { TToast } from "@types";

const { toastItem } = styles;
type TTostItemProps = TToast;

const ToastItem = ({ message, type, title, id }: TTostItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`alert alert-${type} ${toastItem}`}>
      <h5>{title ? title : type}</h5>
      <p>{message}</p>
      <button
        className="btn-close"
        onClick={() => dispatch(removeToast(id))}
      ></button>
      <span className=" placeholder" style={{ width: "100%" }}></span>
    </div>
  );
};

export default ToastItem;
