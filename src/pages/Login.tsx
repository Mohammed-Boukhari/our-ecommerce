import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actAuthLogin,
  resetUI,
} from "@store/authentication/authenticationSlice";
import { useSearchParams, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { LoginSchema, TLoginSchema } from "@validations/loginSchema";
import { Button, Col, Form, Row, Alert, Spinner } from "react-bootstrap";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const { error, loading } = useAppSelector((state) => state.auth);

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
    if (searchParams.get("message") === "account_created") {
      setSearchParams("");
    }
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  const emailOnblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <>
      <Heading title={"User Login"} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created, please login
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)} className="mb-2 mt-2">
            <Input
              label={"Email"}
              name={"email"}
              register={register}
              error={errors.email?.message}
              onBlur={emailOnblurHandler}
            />

            <Input
              label={"Password"}
              type="password"
              name={"password"}
              register={register}
              error={errors.password?.message}
            />

            <Button
              className=" mt-2"
              variant="info"
              type="submit"
              style={{ color: "white" }}
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

export default Login;
