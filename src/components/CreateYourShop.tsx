import { Button, Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function CreateYourShopOption() {
  const navigate = useNavigate();
  return (
    <Row md={1} xs={1} lg={1} className="justify-content-md-center ">
      <Card className="h-100 w-50 ">
        <Card.Body className=" d-flex  flex-column align-items-center">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => navigate("/createWebshop")}
          >
            Create your webShop
          </Button>
        </Card.Body>
      </Card>
    </Row>
  );
}
