import { useAppSelector } from "@store/hooks";
import ToastItem from "./ToastItem";

import styles from "./styles.module.css";

const { toastList } = styles;

const ToastList = () => {
  const { records } = useAppSelector((state) => state.toasts);
  return (
    <div className={toastList}>
      {records.map((el) => {
        return (
          <ToastItem
            key={el.id}
            id={el.id}
            title={el.title}
            message={el.message}
            type={el.type}
          />
        );
      })}
    </div>
  );
};

export default ToastList;
