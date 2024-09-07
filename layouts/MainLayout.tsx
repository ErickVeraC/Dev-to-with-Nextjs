import NavBar from "@/components/NavBar";

export default function MainLayout({ children }) {
  return (
    <main className="p-2">
      <NavBar />
      {children}
    </main>
  );
}
