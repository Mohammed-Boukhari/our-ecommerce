import { useForm, SubmitHandler } from "react-hook-form";
import { Heading } from "@components/common";
import { Button, Col, Form, Row } from "react-bootstrap";

type TFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<TFormInputs>();

  const submitForm: SubmitHandler<TFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Heading title={"User Registration"} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)} className="mb-2 mt-2">
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" {...register("firstName")} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name </Form.Label>
              <Form.Control type="text" {...register("lastName")} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" {...register("email")} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" {...register("password")} />
            </Form.Group>

            <Form.Group>
              <Form.Label> Confirm Password</Form.Label>
              <Form.Control type="password" {...register("confirmPassword")} />
            </Form.Group>

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

export default Register;
