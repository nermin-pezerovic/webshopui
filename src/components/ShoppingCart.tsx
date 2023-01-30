import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  console.log(cartItems);
  const navigate = useNavigate();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = Object.values(cartItems).find(
                  (i) => i.id === cartItem.id
                );
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <Button
            className="w-100"
            onClick={() => {
              navigate("/checkout");
              closeCart()
            }}
          >
            Create Order
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
