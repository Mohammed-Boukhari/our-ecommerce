import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Loading } from "@components/feedback";

import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  const productsList =
    records.length > 0
      ? records.map((record) => {
          return (
            <Col
              key={record.id}
              xs={6}
              md={3}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Product {...record} />
            </Col>
          );
        })
      : "there are no categories";

  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>{productsList}</Row>
      </Loading>
    </Container>
  );
};

export default Products;
