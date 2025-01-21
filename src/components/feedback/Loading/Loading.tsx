import { TLoading } from "@customTypes/shared";
type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};
const Loading = ({ status, error, children }: TLoadingProps) => {
  if (status === "pending") {
    return <p>loading please wait</p>;
  }

  if (status === "failed") {
    return <p>{error}</p>;
  }
  return <>{children}</>;
};

export default Loading;
