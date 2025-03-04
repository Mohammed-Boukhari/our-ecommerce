import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actAuthLogin,
  resetUI,
} from "@store/authentication/authenticationSlice";
import { useSearchParams, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, TLoginSchema } from "@validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const uesLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const { error, loading, accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

  const submitForm: SubmitHandler<TLoginSchema> = async (data) => {
    if (searchParams.get("message")) {
      setSearchParams("");
    }
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  const emailOnblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return {
    error,
    loading,
    accessToken,
    register,
    handleSubmit,
    errors,
    submitForm,
    emailOnblurHandler,
    searchParams,
  };
};

export default uesLogin;
