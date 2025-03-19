import { NavLink, Outlet } from "react-router-dom";
import { Col, ListGroup, Row } from "react-bootstrap";

const ProfileLayout = () => {
  return (
    <Row>
      <Col md={3}>
        <ListGroup>
          <ListGroup.Item as={NavLink} to={""} end>
            Account Info
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to={"orders"}>
            Orders
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
};

export default ProfileLayout;
