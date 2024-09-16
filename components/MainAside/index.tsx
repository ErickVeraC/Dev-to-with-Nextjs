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
        <p className="text-xs text-gray-500 p-2">
          <span className="text-[#5d67e3]">DEV Community</span> A constructive
          and inclusive social network for software developers. With you every
          step of your journey.
        </p>
        <p className="text-xs text-gray-500 p-2">
          Built on <span className="text-[#5d67e3]">Forem</span> — the{" "}
          <span className="text-[#5d67e3]">open source</span> software that
          powers <span className="text-[#5d67e3]">DEV</span> and other inclusive
          communities.
        </p>
        <p className="text-xs text-gray-500 p-2">
          Made with love and{" "}
          <span className="text-[#5d67e3]">Ruby on Rails.</span> DEV Community
          2016 - 2024.
        </p>
      </div>
    </aside>
  );
}
