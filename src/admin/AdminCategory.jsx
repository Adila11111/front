import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

const AdminCategoryDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "" });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/categories");
      setCategories(res.data);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:3000/api/v1/categories/${editId}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post("http://localhost:3000/api/v1/categories", form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setForm({ name: "" });
      setEditId(null);
      fetchCategories();
    } catch (err) {
      console.error("Save failed", err);
    }
  };

  const handleEdit = (cat) => {
    setForm({ name: cat.name });
    setEditId(cat.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/v1/categories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCategories();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container py-4">
        <h2 className="mb-4">Admin Category Dashboard</h2>

        <form onSubmit={handleSubmit} className="mb-4 row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Category Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-success w-100" type="submit">
              {editId ? "Update" : "Add"}
            </button>
          </div>
        </form>

        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(cat)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(cat.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminCategoryDashboard;
