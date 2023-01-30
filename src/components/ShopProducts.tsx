import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { UseOwner } from "../context/OwnerProvider";
import { AddItem } from "./AddItem";
import { MyStoreItem } from "./MyStoreItem";

export function ShopProducts(owner: any) {
  const { getProducts, didRequestFail, enterShop } = UseOwner();
  useEffect(() => {
    enterShop(owner.owner.id);
  }, [owner.owner.id]);

  let error: string = didRequestFail();
  const products = getProducts();
  console.log(products)
  return (
    <>
      <h1>{owner.owner.shop_name}</h1>
      <AddItem />
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
              <MyStoreItem {...item} />
            </Col>
          )
        )}
      </Row>
    </>
  );
}
