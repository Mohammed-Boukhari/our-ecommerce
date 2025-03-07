import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetOrders, resetOrderStatus } from "@store/orders/ordersSlice";

/* type */ import { TProduct } from "@types";

const uesOrders = () => {
  const dispatch = useAppDispatch();

  const { error, loading, orderList } = useAppSelector((state) => state.orders);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([]);

  const viewDetailsHandler = (id: number) => {
    const productDetails = orderList.find((order) => order.id === id);
    const newItems = productDetails?.items ?? [];

    setShowModal(true);
    setSelectedProduct((prev) => [...prev, ...newItems]);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setSelectedProduct([]);
  };

  useEffect(() => {
    const promise = dispatch(actGetOrders());
    return () => {
      promise.abort();
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);
  return {
    error,
    loading,
    orderList,
    showModal,
    setShowModal,
    selectedProduct,
    setSelectedProduct,
    viewDetailsHandler,
    closeModalHandler,
  };
};

export default uesOrders;
