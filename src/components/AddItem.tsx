import { Button, Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export function AddItem() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <Row md={2} xs={1} lg={3} className="g-3 w-100 align-items-center d-flex flex-column">
      <Card className="h-100 w-50">
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="mt-auto">
            <Button
              className="w-100"
              onClick={() => {
                if (isLoggedIn()) {
                  navigate("/addNewItem");
                } else {
                }
              }}
            >
              Create new item
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
}
