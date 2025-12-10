import Header from "@/components/Header";
import NavItems from "@/components/NavItem";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen text-gray-400 color-purple-500">
      <Header />
      <div className="container py-10">{children}</div>
      <nav >
        <NavItems />
      </nav>

      {/* UserDropdown */}
    </main>
  );
};

export default Layout;
