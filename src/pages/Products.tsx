import { TProduct } from "@types";
import useProducts from "@hooks/useProducts";

import { Loading } from "@components/feedback";

import { Product } from "@components/eCommerce";
import { GridList, Heading } from "@components/common";

const Products = () => {
  const { loading, error, productsFullInfo, paramsPrefix } = useProducts();

  return (
    <>
      <head>
        <title>our eCommerce | Products</title>
      </head>

      {/* Heading title */}
      <Heading title={`${paramsPrefix?.toUpperCase()} Products`} />
      {/*=== Heading title ===*/}

      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
          emptyMessage={"there ate no products"}
        />
      </Loading>
    </>
  );
};

export default Products;
