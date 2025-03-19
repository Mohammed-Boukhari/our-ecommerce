import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { removeToast, stopDelayAppearance } from "@store/toasts/toastsSlice";

import { TToast } from "@types";

import styles from "./styles.module.css";
const { toastItem } = styles;

type TTostItemProps = TToast;

const ToastItem = ({
  message,
  type,
  title,
  id,
  delayAppearance,
  onCloseToast,
}: TTostItemProps) => {
  const dispatch = useAppDispatch();
  const [progressBarINdicator, setProgressBarINdicator] = useState<number>(0);
  const [pauseProgressBarIndicator, setPauseProgressBarIndicator] =
    useState<boolean>(false);

  const progressBarScale: number = 100;
  const duration: number = 4000;
  const intervalTime: number = duration / 100;

  const closeToastHandler = useCallback(() => {
    dispatch(removeToast(id));
    onCloseToast?.();
  }, [dispatch, id]);

  const pauseProgressBarIndicatorHandler = () => {
    setPauseProgressBarIndicator((prevState) => !prevState);
  };

  // TODO: progress bar calculate
  useEffect(() => {
    if (delayAppearance) return;

    const timerId: number = setInterval(() => {
      setProgressBarINdicator((prevState) => {
        if (!pauseProgressBarIndicator) {
          if (prevState < progressBarScale) {
            return prevState + 1;
          }
        }
        return prevState;
      });
    }, intervalTime);

    return () => clearInterval(timerId);
  }, [intervalTime, delayAppearance, pauseProgressBarIndicator]);

  // TODO: close toast when progress bar 100%
  useEffect(() => {
    if (progressBarINdicator === 100) {
      closeToastHandler();
    }
  }, [progressBarINdicator, closeToastHandler]);

  // TODO: delay appearance handler
  useEffect(() => {
    if (delayAppearance) {
      const timerId = setTimeout(() => {
        dispatch(stopDelayAppearance(id));
      }, 2000);
      return () => clearTimeout(timerId);
    }
  }, [delayAppearance, dispatch, id]);

  // TODO: if delay with true return nothing
  if (delayAppearance) return "";

  return (
    <div
      className={`alert alert-${type} ${toastItem}`}
      onMouseEnter={pauseProgressBarIndicatorHandler}
      onMouseLeave={pauseProgressBarIndicatorHandler}
    >
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
