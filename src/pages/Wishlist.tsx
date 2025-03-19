import { Product } from "@components/eCommerce";
import { GridList, Heading } from "@components/common";
import { TProduct } from "@types";

import { Loading } from "@components/feedback";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
  const { records, loading, error } = useWishlist();
  return (
    <>
      <head>
        <title>our eCommerce | Wishlist</title>
      </head>

      {/* Heading title */}
      <Heading title={"Your Wishlist"} />
      {/*=== Heading title ===*/}

      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
          emptyMessage={"there ate no wishlist"}
        />
      </Loading>
    </>
  );
};

export default Wishlist;
