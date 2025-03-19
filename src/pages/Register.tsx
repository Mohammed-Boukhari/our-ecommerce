import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { Navigate } from "react-router-dom";
import uesRegister from "@hooks/uesRegister";

const Register = () => {
  const {
    error,
    loading,
    accessToken,
    register,
    handleSubmit,
    errors,
    emailAvailabilityStatus,
    submitForm,
    emailOnblurHandler,
  } = uesRegister();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <head>
        <title>our eCommerce | Register</title>
      </head>
      {/* Heading title */}
      <Heading title={"User Registration"} />
      {/*=== Heading title ===*/}

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
