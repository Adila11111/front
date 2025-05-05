// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const Navbar = () => {
//     const state = useSelector(state => state.handleCart)
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
//             <div className="container">
//                 <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink>
//                 <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav m-auto my-2 text-center">
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/">Home </NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/product">Products</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/about">About</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/contact">Contact</NavLink>
//                         </li>
//                     </ul>
//                     <div className="buttons text-center">
//                         <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
//                         <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
//                         <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
//                     </div>
//                 </div>


//             </div>
//         </nav>
//     )
// }

// export default Navbar


import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';  // Use 'useNavigate' instead of 'useHistory'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector(state => state.handleCart);
  const navigate = useNavigate();  // 'useNavigate' is used for navigation in React Router v6

  // Check if user is logged in by looking for a token in localStorage
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    // Remove token from localStorage to log out
    localStorage.removeItem('token');
    
    // Redirect user to Home or Login page after logout
    navigate("/");  // Use navigate instead of history.push
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">React Ecommerce</NavLink>
        <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Show Home, Products, About, Contact links if user is logged in */}
          <ul className="navbar-nav m-auto my-2 text-center">
            {token && (
              <>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/product">Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
              </>
            )}
          </ul>
          
          {/* Show Login/Register if user is not logged in */}
          <div className="buttons text-center">
            {!token ? (
              <>
                <NavLink to="/" className="btn btn-outline-dark m-2">
                  <i className="fa fa-sign-in-alt mr-1"></i> Login
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark m-2">
                  <i className="fa fa-user-plus mr-1"></i> Register
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/cart" className="btn btn-outline-dark m-2">
                  <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
                </NavLink>
                <button className="btn btn-outline-dark m-2" onClick={handleLogout}>
                  <i className="fa fa-sign-out-alt mr-1"></i> Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
