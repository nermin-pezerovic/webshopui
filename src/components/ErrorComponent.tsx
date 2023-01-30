import { Card, Row } from "react-bootstrap";

export function ErrorComponent(error: any) {
  return (
    <Row md={1} xs={1} lg={1} className="justify-content-md-center ">
      <Card className="h-100 w-50 align-">
        <Card.Body className=" d-flex  flex-column align-items-center">
          <div className="mt-auto">{error.error}</div>
        </Card.Body>
      </Card>
    </Row>
  );
}
