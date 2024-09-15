import { useEffect, useState } from "react";
import { getUserData } from "@/utils/api";
import SearchBar from "@/components/NavBar/SearchBar";
import UserMenu from "@/components/NavBar/UserMenu";
import AuthButtons from "@/components/NavBar/AuthButtons";
import Logo from "@/components/NavBar/Logo";

function NavBar({ onSearch }) {
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<{
    name: string;
    profilePic: string;
  } | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    setToken(storedToken);

    if (userId) {
      getUserData(userId)
        .then((user) => {
          if (user && user.name && user.profilePic) {
            setUserData({ name: user.name, profilePic: user.profilePic });
            localStorage.setItem("name", user.name);
            localStorage.setItem("profilePic", user.profilePic);
          } else {
            console.error("Invalid user data:", user);
          }
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, []);

  return (
    <nav className="w-full flex justify-between items-center p-2 bg-white">
      <Logo />
      <SearchBar onSearch={onSearch} /> {/* Pasa onSearch a SearchBar */}
      {token ? <UserMenu userData={userData} /> : <AuthButtons />}
    </nav>
  );
}

export default NavBar;
