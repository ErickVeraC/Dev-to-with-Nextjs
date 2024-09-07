import { useEffect, useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Aquí puedes obtener el token desde el almacenamiento local o cookies
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleSearch = (query: string) => {
    // Lógica para filtrar posts por query
    console.log("Searching for:", query);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <Logo />
      <SearchBar onSearch={handleSearch} />
      {token ? <UserMenu /> : <AuthButtons />}
    </nav>
  );
}
