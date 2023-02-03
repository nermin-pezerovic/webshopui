import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { UseOwner } from "../context/OwnerProvider";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Checkout() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { createOrder } = UseOwner();
  const { cartItems, emptyCart } = useShoppingCart();
  const productIds = cartItems.map((item) => {
    return item.id;
  });

  return (
    <Row md={1} xs={1} lg={1}>
      <Card className="h-100">
        <Card.Body className=" d-flex  flex-column align-items-center ">
          <div className="mt-auto">
            <Card.Title>Review your order</Card.Title>
            <Table striped="columns">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr>
                    <td></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button
              className="w-100"
              onClick={() => {
                if (isLoggedIn()) {
                  createOrder(productIds);
                  emptyCart();
                  navigate("/");
                } else {
                }
              }}
            >
              Create Order
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
}
