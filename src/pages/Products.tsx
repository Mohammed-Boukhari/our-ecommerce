import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import {
  actGetProductsByCatPrefix,
  cleanUpProductsRecords,
} from "@store/products/productsSlice";
import { Loading } from "@components/feedback";

import { Product } from "@components/eCommerce";
import { GridList, Heading } from "@components/common";
import { TProduct } from "@customTypes/product";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: wishlistItemsId.includes(el.id),
  }));

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(cleanUpProductsRecords());
    };
  }, [dispatch, params]);

  return (
    <>
      <Heading>
        <span className="text-capitalize">{params.prefix}</span> Products
      </Heading>
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;
