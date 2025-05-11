'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Optional: Auto-fetch student on page load
  useEffect(() => {
    async function fetchStudent() {
      try {
        const res = await fetch('/api/student/me'); 
        if (res.ok) {
          const data = await res.json();
          setStudent(data.student);
        }
      } catch (err) {
        setStudent(null);
      } finally {
        setLoading(false);
      }
    }

    fetchStudent();
  }, []);

  const login = (studentData) => {
    setStudent(studentData);
  };

  const logout = async () => {
    await fetch('/api/student/logout', { method: 'POST' });
    setStudent(null);
    toast.success("Logout successfully.")
  };

  return (
    <AuthContext.Provider value={{ student, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
