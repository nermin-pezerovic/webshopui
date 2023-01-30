import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { WebShop } from "../components/WebShopCard";
import { UseOwner } from "../context/OwnerProvider";

export function WebShops() {
  const { fetchShops, gs } = UseOwner();
  let webShops = [];
  useEffect(() => {
    fetchShops();
  }, []);

  webShops = gs();

  return (
    webShops.length && (
      <>
        <h1>WebShops</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {webShops.map(
            (
              webShop: JSX.IntrinsicAttributes & {
                id: number;
                first_name: string;
                last_name: number;
                shop_name: string;
              }
            ) => (
              <Col key={webShop.id}>
                <WebShop {...webShop} />
              </Col>
            )
          )}
        </Row>
      </>
    )
  );
}
