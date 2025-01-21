import { Row, Col } from "react-bootstrap";
import { TCategory } from "@customTypes/category";
type TGridListProps = {
  records: TCategory[];
  renderItem: (record: TCategory) => React.ReactNode;
};
const GridList = ({ records, renderItem }: TGridListProps) => {
  const categoriesList =
    records.length > 0
      ? records.map((record) => {
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
      : "there are no categories";

  return <Row>{categoriesList}</Row>;
};

export default GridList;
