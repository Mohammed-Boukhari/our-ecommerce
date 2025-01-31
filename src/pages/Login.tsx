import { SubmitHandler, useForm } from "react-hook-form";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { LoginSchema, TLoginSchema } from "@validations/loginSchema";
import { Button, Col, Form, Row } from "react-bootstrap";

import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

  const submitForm: SubmitHandler<TLoginSchema> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Heading title={"User Login"} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)} className="mb-2 mt-2">
            <Input
              label={"Email"}
              name={"email"}
              register={register}
              error={errors.email?.message}
            />
            {/* <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" name="emailAddress" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" />
            </Form.Group> */}
            <Input
              label={"Password"}
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
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
