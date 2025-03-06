import { useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { actPlaceOrder } from "@store/orders/ordersSlice";

import { Button, Modal, Spinner } from "react-bootstrap";

import { TProduct } from "@types";
type TCartSubtotalProps = {
  products: TProduct[];
  userAccessToken: string | null;
};
import styles from "./style.module.css";
import { clearCartAfterPlaceOrder } from "@store/cart/cartSlice";

const CartSubtotalPrice = ({
  products,
  userAccessToken,
}: TCartSubtotalProps) => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [showModal, setShowModal] = useState(false);

  const subtotalPrice = products.reduce((accumulator, el) => {
    const price = el.price;
    const quantity = el.quantity;

    if (quantity && typeof quantity === "number") {
      return accumulator + price * quantity;
    } else {
      return accumulator;
    }
  }, 0);
  const modalHandler = () => {
    setShowModal(!showModal);
    setError(null);
  };

  const placeOrderHandler = () => {
    setLoading(true);
    dispatch(actPlaceOrder(subtotalPrice))
      .unwrap()
      .then(() => {
        dispatch(clearCartAfterPlaceOrder());
        setShowModal(true);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Modal show={showModal} onHide={() => modalHandler()} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Placing Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to place order with Subtotal:
          {` ${subtotalPrice.toFixed(2)} EGP`}
          {!loading && error && (
            <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => modalHandler()}>
            close
          </Button>
          <Button
            variant="info"
            style={{ color: "wheat" }}
            onClick={() => placeOrderHandler()}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm" /> Loading
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      <div className={styles.container}>
        <span>Subtotal:</span>
        <span>{subtotalPrice.toFixed(2)} EGP</span>
      </div>
      {userAccessToken && (
        <div className={styles.container}>
          <span></span>
          <span>
            <Button
              variant="info"
              style={{ color: "white" }}
              onClick={() => modalHandler()}
            >
              Place Order
            </Button>
          </span>
        </div>
      )}
    </>
  );
};

export default CartSubtotalPrice;
