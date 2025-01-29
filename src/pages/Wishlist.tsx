import { Product } from "@components/eCommerce";
import { GridList, Heading } from "@components/common";
import { TProduct } from "@customTypes/product";

import { Loading } from "@components/feedback";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
  const { records, loading, error } = useWishlist();
  return (
    <>
      <Heading title={"Your Wishlist"} />
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;
