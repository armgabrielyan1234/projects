import React from "react";
import Footer from "../components/main/footer";
import Header from "../components/main/header";
import { ThemeProvider } from "../context";

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
