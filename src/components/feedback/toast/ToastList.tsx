import { useAppSelector } from "@store/hooks";
import ToastItem from "./ToastItem";

import styles from "./styles.module.css";

const { toastList } = styles;

const ToastList = () => {
  const { records } = useAppSelector((state) => state.toasts);
  return (
    <div className={toastList}>
      {records.map(({ id, message, type, title }) => {
        return (
          <ToastItem key={id} title={title} message={message} type={type} />
        );
      })}
    </div>
  );
};

export default ToastList;
