import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function UserMenu({
  userData,
}: {
  userData: { name: string; profilePic: string } | null;
}) {
  return (
    <div className="user-menu flex items-center gap-4">
      <Link
        className="text-[#3b49df] text-sm py-2 px-4 border border-[#3b49df] rounded-md hover:bg-[#3b49df] hover:text-white"
        href="/new"
      >
        Create Post
      </Link>
      <button className="p-2">
        <FontAwesomeIcon icon={faBell} className="size-6" />
      </button>
      {userData && (
        <>
          <img
            src={userData.profilePic}
            alt={userData.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        </>
      )}
    </div>
  );
}
