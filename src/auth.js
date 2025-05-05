// src/auth/auth.js
import {jwtDecode} from "jwt-decode";

export const isAdmin = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return false;
    const decoded = jwtDecode(token);

    console.log("isAdmin decoded token:", decoded); // Debugging

    return decoded?.is_admin === true; // ✅ strict check
  } catch (err) {
    console.error("Error decoding token in isAdmin:", err);
    return false;
  }
};
