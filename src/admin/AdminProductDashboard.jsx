// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useCallback } from 'react';
// import AdminNavbar from "./AdminNavbar";

// const AdminProductDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//     category_name: ""
//   });
//   const [editId, setEditId] = useState(null);

//   const token = localStorage.getItem("token");

//   const fetchProducts = useCallback(async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/api/v1/products", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProducts(res.data);
//     } catch (err) {
//       console.error("Failed to fetch products", err);
//     }
//   }, [token]); // Add token as a dependency
  
//   const fetchCategories = useCallback(async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/api/v1/categories");
//       setCategories(res.data);
//     } catch (err) {
//       console.error("Failed to fetch categories", err);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProducts();
//     fetchCategories();
//   }, [fetchProducts, fetchCategories]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) {
//         await axios.put(`http://localhost:3000/api/v1/products/${editId}`, form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post("http://localhost:3000/api/v1/products", form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       setForm({ name: "", description: "", price: "", image: "", category_id: "" });
//       setEditId(null);
//       fetchProducts();
//     } catch (err) {
//       console.error("Save failed", err);
//     }
//   };
//   const handleEdit = (product) => {
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       image: product.image,
//       category_id: product.category_id,
//     });
//     setEditId(product.id);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`http://localhost:3000/api/v1/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchProducts();
//     } catch (err) {
//       console.error("Delete failed", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//     <AdminNavbar/>
//     <div className="container py-4">
//       <h2 className="mb-4">Admin Product Dashboard</h2>

//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="row g-3">
//           <div className="col-md-4">
//             <input type="text" className="form-control" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//           </div>
//           <div className="col-md-4">
//             <input type="text" className="form-control" name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
//           </div>
//           <div className="col-md-2">
//             <input type="text" className="form-control" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
//           </div>
//           <div className="col-md-4">
//             <input type="text" className="form-control" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
//           </div>
//           <div className="col-md-2">
//             <input type="number" className="form-control" name="category_id" placeholder="Category ID" value={form.category_id} onChange={handleChange} required />
//           </div>
//           <div className="col-md-2">
//             <button className="btn btn-success w-100" type="submit">
//               {editId ? "Update" : "Add"}
//             </button>
//           </div>
//         </div>
//       </form>

//       <table className="table table-bordered table-striped">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Image</th>
//             <th>Category</th>
//             <th>Created At</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((p) => (
//             <tr key={p.id}>
//               <td>{p.id}</td>
//               <td>{p.name}</td>
//               <td>{p.description}</td>
//               <td>${p.price}</td>
//               <td><img src={p.image} alt={p.name} width={60} /></td>
//               <td>{p.category_name}</td>
//               <td>{new Date(p.created_at).toLocaleDateString()}</td>
//               <td>
//                 <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(p)}>Edit</button>
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// };

// export default AdminProductDashboard;
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

const AdminProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category_id: ""
  });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  }, [token]);

  const fetchCategories = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/categories");
      setCategories(res.data);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:3000/api/v1/products/${editId}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post("http://localhost:3000/api/v1/products", form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setForm({ name: "", description: "", price: "", image: "", category_id: "" });
      setEditId(null);
      fetchProducts();
    } catch (err) {
      console.error("Save failed", err);
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category_id: product.category_id,
    });
    setEditId(product.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/v1/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProducts();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container py-4">
        <h2 className="mb-4">Admin Product Dashboard</h2>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="row g-3">
            <div className="col-md-4">
              <input type="text" className="form-control" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
            </div>
            <div className="col-md-3">
              <select className="form-select" name="category_id" value={form.category_id} onChange={handleChange} required>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success w-100" type="submit">
                {editId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </form>

        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Category</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>${p.price}</td>
                <td><img src={p.image} alt={p.name} width={60} /></td>
                <td>{p.category_name}</td>
                <td>{new Date(p.created_at).toLocaleDateString()}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(p)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminProductDashboard;
