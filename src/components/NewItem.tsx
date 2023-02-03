import { useState } from "react";
import { Button, Card, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { UseOwner } from "../context/OwnerProvider";

export function NewItem() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { createProduct, uploadImage } = UseOwner();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File>();
  const [fileName, setFileName] = useState<string>("");

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
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formProductDescription">
                <Form.Label>Product description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formProductPrice">
                <Form.Label>Product price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Product price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="exampleFormControlFile1"
                  name="file"
                  type="file"
                  onChange={(e) => {
                    e.preventDefault();
                    setSelectedFiles((e.target as HTMLInputElement).files![0]);
                    setFileName((e.target as HTMLInputElement).files![0].name);
                  }}
                />
              </Form.Group>
              <Button
                className="w-100"
                onClick={() => {
                  if (isLoggedIn()) {
                    const product_path = fileName.replaceAll(/\s/g, "");
                    const imageFile = new FormData();
                    imageFile.append("file", selectedFiles!, product_path);
                    createProduct({ name, description, price, product_path });
                    uploadImage(imageFile);
                    navigate("/store");
                  } else {
                  }
                }}
              >
                Create new item
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
}
