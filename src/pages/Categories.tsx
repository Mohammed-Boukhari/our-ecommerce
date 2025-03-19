import useCategories from "@hooks/useCategories";
import { GridList, Heading } from "@components/common";
import { Category } from "@components/eCommerce";

import { Loading } from "@components/feedback";
import { TCategory } from "@types";

const Categories = () => {
  const { records, loading, error } = useCategories();

  return (
    <>
      <head>
        <title>our eCommerce | Categories</title>
      </head>
      
      {/*=== Heading title ===*/}
      <Heading title={"Categories"} />
      {/*=== Heading title ===*/}

      <Loading status={loading} error={error} type="category">
        <GridList<TCategory>
          records={records}
          renderItem={(record) => <Category {...record} />}
          emptyMessage={"there ate no categories"}
        />
      </Loading>
    </>
  );
};

export default Categories;
