import { useState } from "react";
import { Button, Card, Row, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { UseOwner } from "../context/OwnerProvider";

export function EditProduct() {
  const { isLoggedIn } = useAuth();
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const location = useLocation();
  const { updateProduct } = UseOwner();
  const productId = location.state.id;

  return (
    <Row md={1} xs={1} lg={1} className="g-3">
      <Card className="h-100">
        <Card.Body className=" d-flex  flex-column align-items-left ">
          <div className="mt-auto">
            <Form>
              <Form.Group className="mb-3" controlId="fromProductName">
                <Form.Label>Product name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product name"
                  onChange={(e) => setNewName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formProductDescription">
                <Form.Label>Product description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product description"
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formProductPrice">
                <Form.Label>Product price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Product price"
                  onChange={(e) => setNewPrice(e.target.value)}
                />
              </Form.Group>
              <Button
                className="w-100"
                onClick={() => {
                  if (isLoggedIn()) {
                    updateProduct(
                      productId,
                      newName,
                      newDescription,
                      newPrice,
                    );
                  } else {
                  }
                }}
              >
                Confirm edit
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
}
