// import React from "react";
// import ReactDOM from "react-dom/client";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";

// import {
//   Home,
//   Product,
//   Products,
//   AboutPage,
//   ContactPage,
//   Cart,
//   Login,
//   Register,
//   Checkout,
//   PageNotFound,
// } from "./pages";
// import ScrollToTop from "./components/ScrollToTop";
// import { Toaster } from "react-hot-toast";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <ScrollToTop>
//       <Provider store={store}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product" element={<Products />} />
//           <Route path="/product/:id" element={<Product />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="*" element={<PageNotFound />} />
//           <Route path="/product/*" element={<PageNotFound />} />
//         </Routes>
//       </Provider>
//     </ScrollToTop>
//     <Toaster />
//   </BrowserRouter>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Importing pages
import {
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";

// Admin pages
import AdminProductDashboard from "./admin/AdminProductDashboard";
import AdminUserDashboard from "./admin/AdminUserDashboard"; // Admin users management
import AdminOrderDashboard from "./admin/AdminOrderDashboard"; // Admin orders management
import AdminCategoryDashboard from "./admin/AdminCategory";
// Component imports
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

// Admin route protection helper
import PrivateRoute from "./components/PrivateRoute"; // Custom PrivateRoute component




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop>
      <Provider store={store}>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />

          {/* Admin Routes (protected) */}
          <Route element={<PrivateRoute />}>
            <Route path="/AdminProductDashboard" element={<AdminProductDashboard />} />
            <Route path="/AdminUserDashboard" element={<AdminUserDashboard />} />
            <Route path="/AdminOrderDashboard" element={<AdminOrderDashboard />} />
            <Route path="/AdminCategory" element={<AdminCategoryDashboard />} />
          </Route>
        </Routes>
      </Provider>
    </ScrollToTop>
    <Toaster />
  </BrowserRouter>
);
