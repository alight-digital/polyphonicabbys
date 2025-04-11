// src/components/Layout.tsx
import React, { ReactNode } from "react";
import "../styles/reset.css";
import "../styles/main.css";
import { Link } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="content">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
