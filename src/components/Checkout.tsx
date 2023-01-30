import { Button, Card, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Checkout() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { closeCart, cartItems } = useShoppingCart();
  console.log(cartItems);

  return (
    <Row md={1} xs={1} lg={1} className="g-3">
      <Card className="h-100">
        <Card.Body className=" d-flex  flex-column align-items-center ">
          <div className="mt-auto">
            <Button
              className="w-100"
              onClick={() => {
                if (isLoggedIn()) {
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
