import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-5">
      <Header />
      <Outlet />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          top: 20, // Space from the top
        }}
        toastOptions={{
          className: "shadow-lg rounded-lg",
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
            padding: "16px",
            fontSize: "14px",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
            style: {
              background: "linear-gradient(135deg, #6BCB77, #28A745)", // Gradient for success
              color: "#fff",
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
            style: {
              background: "linear-gradient(135deg, #FF6B6B, #FF4757)", // Gradient for error
              color: "#fff",
            },
          },
          loading: {
            duration: 3000,
            iconTheme: {
              primary: "#4F46E5",
              secondary: "white",
            },
            style: {
              background: "#3B82F6", // Blue background for loading
              color: "#fff",
            },
          },
        }}
      />
    </main>
  );
};

export default Layout;
