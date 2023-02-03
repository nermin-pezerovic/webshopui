import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { UseOwner } from "../context/OwnerProvider";

export function WebShopPage() {
  const { enterShop, getProducts } = UseOwner();
  let id = useParams();

   useEffect(() => {
     enterShop(id.id as string);
   },[]);
  const products = getProducts();

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map(
          (
            item: JSX.IntrinsicAttributes & {
              id: number;
              name: string;
              price: number;
              description: string;
            }
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          )
        )}
      </Row>
    </>
  );
}
