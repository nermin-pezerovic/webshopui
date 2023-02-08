import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  product_path:string;
};

export function MyStoreItem(props: StoreItemProps) {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  return (
    <Card className="h-100 ">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{props.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(props.price)}</span>
        </Card.Title>
        <Card.Img
          variant="top"
          src={`http://localhost:3000/${props.product_path}`}
          height="200px"
          style={{ objectFit: "cover", marginBottom: "1.5rem" }}
        />
        <div style={{ marginBottom: "1.5rem" }}>{props.description}</div>
        <div className="mt-auto">
          {
            <Button
              className="w-100"
              onClick={() => {
                if (isLoggedIn()) {
                  navigate("/editProduct", { state: props });
                } else {
                  navigate("/login");
                }
              }}
            >
              Edit product
            </Button>
          }
        </div>
      </Card.Body>
    </Card>
  );
}
