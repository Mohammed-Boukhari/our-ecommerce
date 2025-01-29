import useCategories from "@hooks/useCategories";
import { GridList, Heading } from "@components/common";
import { Category } from "@components/eCommerce";

import { Loading } from "@components/feedback";
import { TCategory } from "@customTypes/category";

const Categories = () => {
  const { records, loading, error } = useCategories();

  return (
    <>
      <Heading title={"Categories"} />
      <Loading status={loading} error={error}>
        <GridList<TCategory>
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
};

export default Categories;
