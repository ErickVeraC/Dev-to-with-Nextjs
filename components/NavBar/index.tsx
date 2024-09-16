import { useEffect, useState } from "react";
import { getUserData } from "@/utils/api";
import SearchBar from "@/components/NavBar/SearchBar";
import UserMenu from "@/components/NavBar/UserMenu";
import AuthButtons from "@/components/NavBar/AuthButtons";
import Logo from "@/components/NavBar/Logo";
import NavList from "@/components/MainAside/NavList";

function NavBar({ onSearch }) {
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<{
    name: string;
    profilePic: string;
  } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="w-full flex items-center p-2 bg-white">
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none"
        >
          &#9776;
        </button>
      </div>
      <div className="flex items-center w-24 md:w-auto">
        <Logo />
      </div>
      <div className="flex-grow hidden md:block px-2">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="flex items-center ml-auto px-2">
        {token ? <UserMenu userData={userData} /> : <AuthButtons />}
      </div>
      {isMenuOpen && (
        <div className="w-full md:hidden">
          <NavList />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
