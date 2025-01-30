import Lottie from "lottie-react";
import notFound from "@assets/lottieFiles/notFound.json";
import empty from "@assets/lottieFiles/empty.json";
import error from "@assets/lottieFiles/error.json";
import loading from "@assets/lottieFiles/loading.json";

const lottieFilesMap = {
  notFound,
  empty,
  error,
  loading,
};

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
};
const LottieHandler = ({ type, message }: LottieHandlerProps) => {
  const animation = lottieFilesMap[type];
  return (
    <div className="d-flex flex-column align-items-center">
      <Lottie animationData={animation} style={{ width: "500px" }} />
      {message && (
        <h3 style={{ marginTop: "300px", fontSize: "19px" }}>{message}</h3>
      )}
    </div>
  );
};

export default LottieHandler;
