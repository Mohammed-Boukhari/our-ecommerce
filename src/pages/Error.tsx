
import { LottieHandler } from "@components/feedback";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const errormessage = `How about going back to safety?`;
const Error = () => {
  return (
    <Container >
      <div className="d-flex flex-column align-items-center justify-content-center" style={{marginTop: "15%"}}>
        <LottieHandler type={"notFound"} />
        <Link to="/" replace={true}>
          {errormessage}
        </Link>
      </div>
    </Container>
  );
};

export default Error;
