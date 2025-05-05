// import React from 'react'
// import { Footer, Navbar } from "../components";
// import { Link } from 'react-router-dom';
// const Register = () => {


//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         const newUser = {
//             ...form,
//             is_admin: false,
//         };
    
//         try {
//             const res = await fetch('http://localhost:3000/api/v1/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newUser),
//             });
    
//             const data = await res.json();
//             if (res.ok) {
//                 alert("User registered successfully!");
//             } else {
//                 alert(data.error || "Failed to register.");
//             }
//         } catch (error) {
//             alert("Something went wrong.");
//         }
//     };
    
//     return (
//         <>
//             <Navbar />
//             <div className="container my-3 py-3">
//                 <h1 className="text-center">Register</h1>
//                 <hr />
//                 <div class="row my-4 h-100">
//                     <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//                         <form>
//                             <div class="form my-3">
//                                 <label for="Name">Full Name</label>
//                                 <input
//                                     type="email"
//                                     class="form-control"
//                                     id="Name"
//                                     placeholder="Enter Your Name"
//                                 />
//                             </div>
//                             <div class="form my-3">
//                                 <label for="Email">Email address</label>
//                                 <input
//                                     type="email"
//                                     class="form-control"
//                                     id="Email"
//                                     placeholder="name@example.com"
//                                 />
//                             </div>
//                             <div class="form  my-3">
//                                 <label for="Password">Password</label>
//                                 <input
//                                     type="password"
//                                     class="form-control"
//                                     id="Password"
//                                     placeholder="Password"
//                                 />
//                             </div>
//                             <div className="my-3">
//                                 <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
//                             </div>
//                             <div className="text-center">
//                                 <button class="my-2 mx-auto btn btn-dark" type="submit" >
//                                     Register
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             {/* <Footer /> */}
//         </>
//     )
// }

// export default Register

// import React, { useState } from 'react';
// import { Footer, Navbar } from "../components";
// import { Link } from 'react-router-dom';

// const Register = () => {
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newUser = {
//             ...form,
//             is_admin: false
//         };

//         try {
//             const res = await fetch('http://localhost:3000/api/v1/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(newUser)
//             });

//             const data = await res.json();
//             if (res.ok) {
//                 alert("User registered successfully!");
//                 setForm({ name: '', email: '', password: '' });
//             } else {
//                 alert(data.error || "Failed to register.");
//             }
//         }catch (error) {
//             console.error("Fetch error:", error);
//             alert("Something went wrong: " + error.message);
//         }
        
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="container my-3 py-3">
//                 <h1 className="text-center">Register</h1>
//                 <hr />
//                 <div className="row my-4 h-100">
//                     <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//                     <form onSubmit={handleSubmit}>
//     <div className="form my-3">
//         <label htmlFor="Name">Full Name</label>
//         <input
//             type="text"
//             className="form-control"
//             id="Name"
//             name="name"
//             placeholder="Enter Your Name"
//             value={form.name}
//             onChange={handleChange}
//         />
//     </div>
//     <div className="form my-3">
//         <label htmlFor="Email">Email address</label>
//         <input
//             type="email"
//             className="form-control"
//             id="Email"
//             name="email"
//             placeholder="name@example.com"
//             value={form.email}
//             onChange={handleChange}
//         />
//     </div>
//     <div className="form my-3">
//         <label htmlFor="Password">Password</label>
//         <input
//             type="password"
//             className="form-control"
//             id="Password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//         />
//     </div>
//     <div className="my-3">
//         <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
//     </div>
//     <div className="text-center">
//         <button className="my-2 mx-auto btn btn-dark" type="submit">
//             Register
//         </button>
//     </div>
// </form>

//                     </div>
//                 </div>
//             </div>
//             {/* <Footer /> */}
//         </>
//     );
// };

// export default Register;

// import React, { useState } from 'react';
// import { Navbar } from "../components";
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newUser = {
//       ...form,
//       is_admin: false
//     };

//     try {
//         const response = await fetch('http://localhost:3000/api/v1/users', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newUser)
//           });
          

//       if (response.ok) {
//         const data = await response.json();
//         alert("User registered successfully!");
//         setForm({ name: '', email: '', password: '' });
//       } else {
//         const error = await response.json();
//         alert(error.message || "Failed to register.");
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       alert("Something went wrong: " + err.message);
//     }
//   };
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import { Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();  // Initialize the navigate function

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      ...form,
      is_admin: false
    };

    try {
      const response = await fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        // const data = await response.json();
        alert("User registered successfully!");
        setForm({ name: '', email: '', password: '' });
        
        // Navigate to the login page after successful registration
        navigate("/"); // <-- This will redirect to the login page
      } else {
        const error = await response.json();
        alert(error.message || "Failed to register.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Something went wrong: " + err.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3">
                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
