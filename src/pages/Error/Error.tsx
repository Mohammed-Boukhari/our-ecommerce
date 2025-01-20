import { Container } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

import "./Error.css";

const errormessage = `How about going back to safety?`;
const Error = () => {
  const error = useRouteError();

  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 500;
    errorStatusText = "Internal Server Error";
  }

  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to="/" replace={true}>
        {errormessage}
      </Link>
    </Container>
  );
};

export default Error;
