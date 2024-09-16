import React from "react";
import NavBar from "@/components/NavBar";

interface MainLayoutProps {
  children: React.ReactNode;
  onSearch: (query: string) => void;
}

function MainLayout({ children, onSearch }: MainLayoutProps) {
  return (
    <main className="">
      <NavBar onSearch={onSearch} />
      {children}
    </main>
  );
}

export default MainLayout;
