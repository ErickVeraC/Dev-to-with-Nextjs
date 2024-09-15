import NavBar from "@/components/NavBar";

function MainLayout({ children, onSearch }) {
  return (
    <main className="">
      <NavBar onSearch={onSearch} />
      {children}
    </main>
  );
}

export default MainLayout;
