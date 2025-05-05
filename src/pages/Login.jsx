// import React from "react";
// import { Link } from "react-router-dom";
// import { Footer, Navbar } from "../components";

// const Login = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Login</h1>
//         <hr />
//         <div class="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div class="my-3">
//                 <label for="display-4">Email address</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="floatingInput"
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div class="my-3">
//                 <label for="floatingPassword display-4">Password</label>
//                 <input
//                   type="password"
//                   class="form-control"
//                   id="floatingPassword"
//                   placeholder="Password"
//                 />
//               </div>
//               <div className="my-3">
//                 <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
//               </div>
//               <div className="text-center">
//                 <button class="my-2 mx-auto btn btn-dark" type="submit" >
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {  Navbar } from "../components";
import { jwtDecode } from "jwt-decode"; // Correct import for jwt-decode

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Dattaaa:", data); // Log the token data

      if (response.ok) {
        // Decode the token to get user info
        const decodedToken = jwtDecode(data.token);
        console.log("Decoded Token:", decodedToken); // Log decoded token (user info)

        // Optionally, store token in localStorage
        localStorage.setItem("token", data.token);

        // Navigate based on user role
        navigate(decodedToken.is_admin ? "/AdminProductDashboard" : "/Product");
      } else {
        setErrorMsg(data.message || "Login failed.");
      }
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {errorMsg && (
                <div className="alert alert-danger py-2">{errorMsg}</div>
              )}
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link to="/register" className="text-decoration-underline text-info">
                    Register
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { jwtDecode } from "jwt-decode"; // ✅ correct
// import { Footer, Navbar } from "../components";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3000/api/v1/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
      
//       console.log(response);  // Log full response for debugging
//       const data = await response.json();
//       console.log("Logged in data:", data); // Log actual data after parsing
      
        
//       if (response.ok) {
//         localStorage.setItem("token", data.token);

//         // Decode the token to check if user is admin
//         const decoded = jwtDecode(data.token);
//         const isAdmin = decoded.is_admin;
//         console.log("Decoded token:", decoded);

//         if (isAdmin) {
//           navigate("/ContactPage.jsx");
//         } else {
//           navigate("Products.jsx");
//         }
        
//       } else {
//         setErrorMsg(data.message || "Login failed.");
//       }
//     } catch (err) {
//       setErrorMsg("Something went wrong. Please try again.");
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Login</h1>
//         <hr />
//         <div className="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form onSubmit={handleSubmit}>
//               <div className="my-3">
//                 <label htmlFor="email">Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="name@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="my-3">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               {errorMsg && (
//                 <div className="alert alert-danger py-2">{errorMsg}</div>
//               )}
//               <div className="my-3">
//                 <p>
//                   New Here?{" "}
//                   <Link to="/register" className="text-decoration-underline text-info">
//                     Register
//                   </Link>
//                 </p>
//               </div>
//               <div className="text-center">
//                 <button className="my-2 mx-auto btn btn-dark" type="submit">
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
