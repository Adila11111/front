import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/admin/products">
          Admin Panel
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link" to="/AdminProductDashboard">Products</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/AdminUserDashboard">Users</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/AdminOrderDashboard">Orders</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/AdminCategory">Categories</NavLink>
            </li>
          </ul>

          {token && (
            <button className="btn btn-outline-light" onClick={handleLogout}>
              <i className="fa fa-sign-out-alt me-1"></i> Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
