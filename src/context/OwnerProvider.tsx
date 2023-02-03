import { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type OwnerProviderProps = {
  children: ReactNode;
};

type OwnerData = {
  id: number;
};

type OwnerContext = {
  fetchOwners: () => Object;
  enterShop: (id: string) => Object;
  fetchShops: () => [];
  gs: () => any;
  getProducts: () => any;
  fetchMyShop: () => any;
  getOwner: () => any;
  didRequestFail: () => string;
  createProduct: ({ name, description, price, product_path }: any) => any;
  createWebshop: (shop_name: string) => any;
  updateProduct: (id: any, name: any, description: any, price: any) => any;
  createOrder: (productIds: number[]) => any;
  uploadImage: (imageFile: FormData) => any;
};

const OwnerContext = createContext({} as OwnerContext);

export function UseOwner() {
  return useContext(OwnerContext);
}

export function OwnerProvider({ children }: OwnerProviderProps) {
  const [error, setError] = useState("");
  const [shops, setShops] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [owner, setOwner] = useState(Object());
  const navigate = useNavigate();

  function getProducts(): any {
    return products;
  }

  function getOwner(): any {
    return owner;
  }

  function didRequestFail() {
    console.log(error);
    if (error) return error;
    return "";
  }

  function gs(): any {
    return shops;
  }

  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: localStorage.getItem("token"),
    },
  };

  function uploadImage(imageFile: FormData) {

    axios
      .post(`http://localhost:3000/api/v1/uploadImage`, imageFile, config)
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);

        setError(err.response.data.message);
      });
    return "";
  }

  function createProduct({ name, description, price, product_path }: any) {
    axios
      .post(
        `http://localhost:3000/api/v1/createProduct`,
        { name, description, price, product_path },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        const data = res.data;
        console.log(data);

        return data;
      })
      .catch((err) => {
        console.log(err);

        setError(err.response.data.message);
      });
    return "";
  }

  function updateProduct(id: any, name: any, description: any, price: any) {
    console.log("list all");
    console.log(id);
    console.log(name);
    console.log(description);
    console.log(price);
    axios
      .put(
        `http://localhost:3000/api/v1/updateProduct`,
        {
          productId: id,
          newName: name,
          newDescription: description,
          newPrice: price,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        const data = res.data;
        console.log(data);

        navigate("/");
        return data;
      })
      .catch((err) => {
        console.log(err);

        setError(err.response.data.message);
      });
    return "";
  }

  function createOrder(productIds: number[]) {
    axios
      .post(
        `http://localhost:3000/api/v1/createOrder`,
        { productIds },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        const data = res.data;
        console.log(data);

        navigate("/");
        return data;
      })
      .catch((err) => {
        console.log(err);

        setError(err.response.data.message);
      });
    return "";
  }

  function createWebshop(shop_name: any) {
    axios
      .post(
        `http://localhost:3000/api/v1/createOwner`,
        { shop_name },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        const data = res.data;
        console.log(data);

        navigate("/");
        return data;
      })
      .catch((err) => {
        console.log(err);

        setError(err.response.data.message);
      });
    return "";
  }

  function fetchOwners(): string {
    axios
      .get(`http://localhost:3000/api/v1/getOwners`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);

        navigate("/");
        return data;
      })
      .catch((err) => {
        console.log(err);

        setError(err.response.data.message);
      });
    return "";
  }

  function enterShop(id: string) {
    axios
      .get(`http://localhost:3000/api/v1/getShopProducts`, {
        params: { id: id },
      })
      .then((res) => {
        const data = res.data;
        console.log(data)
        setProducts(data);
        return data;
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    return "";
  }

  function fetchShops(): any {
    axios
      .get(`http://localhost:3000/api/v1/getOwners`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setShops(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  }

  function fetchMyShop(): any {
    axios
      .get(`http://localhost:3000/api/v1/getOwner`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const data = res.data;
        setOwner(data);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }

  return (
    <OwnerContext.Provider
      value={{
        fetchOwners,
        enterShop,
        fetchShops,
        gs,
        getProducts,
        fetchMyShop,
        createProduct,
        didRequestFail,
        getOwner,
        createWebshop,
        updateProduct,
        createOrder,
        uploadImage,
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
}
