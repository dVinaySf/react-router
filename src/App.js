import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
// import { About } from "./pages/About";
import { Navbar } from "./pages/Navbar";
import { Contact } from "./pages/Contact";
import { OrderSummary } from "./pages/OrderSummary";
import { Product } from "./pages/products/Product";
import { Featured } from "./pages/products/Featured";
import { New } from "./pages/products/New";
import { User } from "./pages/user/User";
import { UserDetails } from "./pages/user/UserDetails";
import { UserAdmin } from "./pages/user/UserAdmin";
import { Profile } from "./pages/Profile";
import { AuthProvider } from "./pages/Auth";
import { Login } from "./pages/Login";
import { RequiredAuth } from "./pages/RequiredAuth";

const LazyAbout = lazy(() => import("../src/pages/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Product />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<User />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<UserAdmin />} />
        </Route>
        <Route
          path="about"
          element={
            <Suspense fallback={"Loading..."}>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route
          path="profile"
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
