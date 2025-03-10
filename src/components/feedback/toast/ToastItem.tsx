import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { removeToast } from "@store/toasts/toastsSlice";

import styles from "./styles.module.css";
import { TToast } from "@types";

const { toastItem } = styles;
type TTostItemProps = TToast;

const ToastItem = ({ message, type, title, id }: TTostItemProps) => {
  const dispatch = useAppDispatch();
  const [progressBarINdicator, setProgressBarINdicator] = useState(0);

  const progressBarScale = 100;
  const duration = 4000;
  const intervalTime = duration / 100;

  const closeToastHandler = useCallback(() => {
    dispatch(removeToast(id));
  }, [dispatch, id]);

  // TODO: progress bar calculate
  useEffect(() => {
    const timerId = setInterval(() => {
      setProgressBarINdicator((prevState) => {
        if (prevState < progressBarScale) {
          return prevState + 1;
        }
        return prevState;
      });

      return () => clearInterval(timerId);
    }, intervalTime);
  }, [intervalTime]);

  // TODO: close toast when progress bar 100%
  useEffect(() => {
    if (progressBarINdicator === 100) {
      closeToastHandler();
    }
  }, [progressBarINdicator, closeToastHandler]);

  return (
    <div className={`alert alert-${type} ${toastItem}`}>
      <h5>{title ? title : type}</h5>
      <p>{message}</p>
      <button
        className="btn-close"
        onClick={() => closeToastHandler()}
      ></button>
      <span
        className=" placeholder"
        style={{
          width: `${progressBarINdicator}%`,
          transition: `width ${intervalTime}ms liner`,
        }}
      ></span>
    </div>
  );
};

export default ToastItem;
