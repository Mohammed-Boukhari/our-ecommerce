import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetOrders } from "@store/orders/ordersSlice";
import { Heading } from "@components/common";
import { Table } from "react-bootstrap";
import { Loading } from "@components/feedback";

const Orders = () => {
  const dispatch = useAppDispatch();

  const { error, loading, orderList } = useAppSelector((state) => state.orders);

  useEffect(() => {
    const promise = dispatch(actGetOrders());
    return () => promise.abort();
  }, [dispatch]);

  return (
    <>
      <Heading title="My Order" />
      <Loading status={loading} error={error} type="category">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((el) => (
              <tr key={el.id}>
                <td>#{el.id}</td>
                <td>
                  {`${el.items.length} item(s) / `}{" "}
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Product Details
                  </span>
                </td>
                <td>{el.subtotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Loading>
    </>
  );
};

export default Orders;
