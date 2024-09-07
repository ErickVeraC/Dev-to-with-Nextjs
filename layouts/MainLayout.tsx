import NavBar from "@/components/NavBar";

export default function MainLayout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}
