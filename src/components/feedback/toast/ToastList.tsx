import { useAppSelector } from "@store/hooks";
import { AnimatePresence, motion } from "motion/react";
import ToastItem from "./ToastItem";

import styles from "./styles.module.css";

const { toastList } = styles;

const ToastList = () => {
  const { records } = useAppSelector((state) => state.toasts);
  return (
    <div className={toastList}>
      <AnimatePresence>
        {records.map((el) => {
          return (
            <motion.div
              layout
              key={el.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut" }}
            >
              <ToastItem
                id={el.id}
                title={el.title}
                message={el.message}
                type={el.type}
                delayAppearance={el.delayAppearance}
                onCloseToast={el.onCloseToast}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ToastList;
