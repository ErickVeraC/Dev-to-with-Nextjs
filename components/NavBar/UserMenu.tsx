import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function UserMenu({
  userData,
}: {
  userData: { name: string; profilePic: string } | null;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/enter";
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative user-menu grid grid-cols-6 gap-4 items-center">
      <Link
        className="col-span-3 text-center text-[#3b49df] text-sm py-2 px-2 border border-[#3b49df] rounded-md hover:bg-[#3b49df] hover:text-white"
        href="/new"
      >
        Create Post
      </Link>
      <button className="col-span-1 p-2">
        <FontAwesomeIcon icon={faBell} className="size-6" />
      </button>
      {userData && (
        <>
          <img
            src={userData.profilePic}
            alt={userData.name}
            className="col-span-2 size-8 rounded-full object-cover cursor-pointer hover:border hover:border-[#c0c0ee]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg p-2"
              style={{ top: "calc(100% + 0.5rem)" }}
            >
              <div className="p-2">
                <p className="text-sm text-gray-700 border-b border-black pb-2">
                  {userData.name}
                </p>
                <button
                  className="w-full text-left bg-transparent px-4 py-2 text-sm rounded-md text-black cursor-pointer hover:bg-[#eeeefc] hover:text-[#3b49df] hover:underline"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
