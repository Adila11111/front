import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

const AdminUserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/v1/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Toggle admin status
  const toggleAdmin = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:3000/api/v1/users/${id}/admin`,
        { is_admin: !currentStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Update user list locally
      setUsers(prev =>
        prev.map(user =>
          user.id === id ? { ...user, is_admin: !currentStatus } : user
        )
      );
    } catch (err) {
      console.error("Failed to update admin status:", err);
    }
  };

  // Delete user
  const deleteUser = async id => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/api/v1/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(prev => prev.filter(user => user.id !== id));
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <h2 className="mb-4">Manage Users</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Is Admin</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.is_admin ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => toggleAdmin(user.id, user.is_admin)}
                    >
                      {user.is_admin ? "Revoke Admin" : "Make Admin"}
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default AdminUserDashboard;
