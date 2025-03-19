import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actAuthRegister,
  resetUI,
} from "@store/authentication/authenticationSlice";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";

import { signUpSchema, TSignUpType } from "@validations/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
const uesRegister = () => {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const { error, loading, accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<TSignUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const submitForm: SubmitHandler<TSignUpType> = async (data) => {
    const { firstName, email, lastName, password } = data;
    dispatch(actAuthRegister({ firstName, email, lastName, password }))
      .unwrap()
      .then(() => {
        navigate("/login?message=account_created");
      });
  };

  const emailOnblurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");
    console.log(isDirty, invalid);
    if (isDirty && !invalid && enteredEmail !== value) {
      checkEmailAvailability(value);
    }
    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    error,
    loading,
    accessToken,
    register,
    handleSubmit,
    errors,
    emailAvailabilityStatus,
    submitForm,
    emailOnblurHandler,
  };
};

export default uesRegister;
