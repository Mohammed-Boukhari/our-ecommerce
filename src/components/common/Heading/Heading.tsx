import { memo } from "react";

import "./heading.css";

const Heading = memo(({ title }: { title: string }) => {
  return (
    <h2 className="mb-3 heading" style={{ fontSize: "26px" }}>
      {title}
    </h2>
  );
});

export default Heading;
