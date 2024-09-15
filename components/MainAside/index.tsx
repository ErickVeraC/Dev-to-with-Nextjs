import { useEffect, useState } from "react";
import NavList from "./NavList";
import { SocialLinks } from "./SocialLinks";
import DevCommunity from "./DevCommunity";

export default function MainAside() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
    <aside className="p-2">
      {!token && <DevCommunity />}
      <NavList />
      <SocialLinks />
      <div>
        <p className="text-xs">
          DEV Community A constructive and inclusive social network for software
          developers. With you every step of your journey.
        </p>
        <p className="text-xs">
          Built on Forem — the open source software that powers DEV and other
          inclusive communities.
        </p>
        <p className="text-xs">
          Made with love and Ruby on Rails. DEV Community © 2016 - 2024.
        </p>
      </div>
    </aside>
  );
}
