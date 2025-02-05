import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthRegister } from "@store/authentication/authenticationSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { Heading } from "@components/common";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { signUpSchema, TSignUpType } from "@validations/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/Form";

const Register = () => {
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector(
    (state) => state.authenticationSlice
  );

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

  const submitForm: SubmitHandler<TSignUpType> = (data) => {
    const { firstName, email, lastName, password } = data;
    dispatch(actAuthRegister({ firstName, email, lastName, password }));
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

  return (
    <>
      <Heading title={"User Registration"} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)} className="mb-2 mt-2">
            <Input
              label={"First Name"}
              name={"firstName"}
              register={register}
              error={errors.firstName?.message}
            />
            <Input
              label={"Last Name"}
              name={"lastName"}
              register={register}
              error={errors.lastName?.message}
            />
            <Input
              onBlur={emailOnblurHandler}
              label={"Email address"}
              name={"email"}
              register={register}
              error={
                errors.email?.message
                  ? errors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "this email is  available for use."
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking" ? true : false}
            />
            <Input
              label={"Password"}
              type="password"
              name={"password"}
              register={register}
              error={errors.password?.message}
            />
            <Input
              label={"Confirm Password"}
              type="password"
              name={"confirmPassword"}
              register={register}
              error={errors.confirmPassword?.message}
            />
            <Button
              className=" mt-2"
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={
                emailAvailabilityStatus === "checking"
                  ? true
                  : false || loading === "pending"
              }
            >
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner> Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
