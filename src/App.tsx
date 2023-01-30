import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { WebShops } from "./pages/WebShops";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/LoginComponent";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { AuthProvider } from "./context/AuthProvider";
import { SignUp } from "./components/SignUpComponent";
import { OwnerProvider } from "./context/OwnerProvider";
import { WebShopPage } from "./pages/WebShop";
import { NewItem } from "./components/NewItem";
import { CreateWebShop } from "./components/CreateWebShop";
import { EditProduct } from "./components/EditProduct";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <div>
      <AuthProvider>
        <OwnerProvider>
          <ShoppingCartProvider>
            <Navbar />
            <Container className="mb-4">
              <Routes>
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Container>
            <Container className="mb-4">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/log-out" element={<WebShops />} />
              </Routes>
            </Container>
            <Container className="mb-4">
              <Routes>
                <Route path="/" element={<WebShops />} />
                <Route path="/shop/:id" element={<WebShopPage />} />
                <Route path="/addNewItem" element={<NewItem />} />
                <Route path="/createWebshop" element={<CreateWebShop />} />
                <Route path="/editProduct" element={<EditProduct />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </Container>
          </ShoppingCartProvider>
        </OwnerProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
