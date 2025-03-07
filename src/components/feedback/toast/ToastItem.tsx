import styles from "./styles.module.css";

const { toastItem } = styles;
const ToastItem = () => {
  return (
    <div className={`alert alert-success ${toastItem}`}>
      <h5>title</h5>
      <p>this is the message</p>
      <button className="btn-close"></button>
      <span className=" placeholder" style={{ width: "100%" }}></span>
    </div>
  );
};

export default ToastItem;
