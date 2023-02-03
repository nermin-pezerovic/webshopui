import { useEffect } from "react";
import { UseOwner } from "../context/OwnerProvider";
import { ErrorComponent } from "../components/ErrorComponent";
import { CreateYourShopOption } from "../components/CreateYourShop";
import { ShopProducts } from "../components/ShopProducts";

export function Store() {
  const { fetchMyShop, didRequestFail, getOwner } = UseOwner();

  useEffect(() => {
    fetchMyShop();
  }, []);
  const owner = getOwner();

  let error: string = didRequestFail();

  return owner.id ? (
    <ShopProducts owner={owner} />
  ) : (
    <>
    <ErrorComponent error={error} />
    <CreateYourShopOption/>
    </>
  );
}
