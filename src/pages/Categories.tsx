import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";

import { Container } from "react-bootstrap";
import { GridList } from "@components/common";
import { Category } from "@components/eCommerce";
import { useEffect } from "react";
import { Loading } from "@components/feedback";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (records.length === 0) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
