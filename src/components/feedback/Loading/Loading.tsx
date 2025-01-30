import CategorySkeletons from "../skeletons/CategorySkeletons/CategorySkeletons";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import { TLoading } from "@types";
import LottieHandler from "../LottieHandler/LottieHandler";

const skeletonsTypes = {
  cart: CartSkeleton,
  product: ProductSkeleton,
  category: CategorySkeletons,
};

type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: "cart" | "product" | "category";
};

const Loading = ({
  status,
  error,
  children,
  type = "category",
}: TLoadingProps) => {
  const Component = skeletonsTypes[type];

  if (status === "pending") {
    return <Component />;
  }

  if (status === "failed") {
    return (
      <div>
        <LottieHandler type={"error"} message={error as string} />
      </div>
    );
  }
  return <>{children}</>;
};

export default Loading;
