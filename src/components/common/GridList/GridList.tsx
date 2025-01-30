import { LottieHandler } from "@components/feedback";
import { Row, Col } from "react-bootstrap";

type TGridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  emptyMessage: string;
};

type THasId = { id?: number };

const GridList = <T extends THasId>({
  records,
  renderItem,
  emptyMessage,
}: TGridListProps<T>) => {
  const categoriesList =
    records.length > 0 ? (
      records.map((record) => {
        return (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)}
          </Col>
        );
      })
    ) : (
      <LottieHandler type={"empty"} message={emptyMessage} />
    );

  return <Row>{categoriesList}</Row>;
};

export default GridList;
