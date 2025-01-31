import { Heading } from "@components/common";
import { Button, Col, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Heading title={"User Login"} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="mb-2 mt-2">
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" name="emailAddress" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" />
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

export default Login;
