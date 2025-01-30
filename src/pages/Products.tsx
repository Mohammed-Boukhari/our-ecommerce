import useProducts from "@hooks/useProducts";

import { Loading } from "@components/feedback";

import { Product } from "@components/eCommerce";
import { GridList, Heading } from "@components/common";
import { TProduct } from "@types";

const Products = () => {
  const { loading, error, productsFullInfo, paramsPrefix } = useProducts();

  return (
    <>
      <Heading title={`${paramsPrefix?.toUpperCase()} Products`} />
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
