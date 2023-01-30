import { useState } from "react";
import { Button, Card, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { UseOwner } from "../context/OwnerProvider";

export function CreateWebShop() {
  const { isLoggedIn } = useAuth();
  const { createWebshop } = UseOwner();
  const [shop_name, setName] = useState("");

  return (
    <Row md={1} xs={1} lg={1} className="g-3">
      <Card className="h-100">
        <Card.Body className=" d-flex  flex-column align-items-left ">
          <div className="mt-auto">
            <Form>
              <Form.Group className="mb-3" controlId="formShopName">
                <Form.Label>Shop Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Shop Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Button
                className="w-100"
                onClick={() => {
                  if (isLoggedIn()) {
                        createWebshop(shop_name);
                  } else {
                  }
                }}
              >
                Create your WebShop
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
}
