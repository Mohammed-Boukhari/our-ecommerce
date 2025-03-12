import { Navigate } from "react-router-dom";
import { useAppSelector } from "@store/hooks";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAppSelector((state) => state.auth); // user is access token

  // TODO: protected pages route
  if (!accessToken) {
    return <Navigate to="/login?message=login_required" />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
