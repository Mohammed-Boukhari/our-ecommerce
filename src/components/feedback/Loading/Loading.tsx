import CategorySkeletons from "../skeletons/CategorySkeletons/CategorySkeletons";
import { TLoading } from "@types";

type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: TLoadingProps) => {
  if (status === "pending") {
    return <CategorySkeletons />;
  }

  if (status === "failed") {
    return <p>{error}</p>;
  }
  return <>{children}</>;
};

export default Loading;
