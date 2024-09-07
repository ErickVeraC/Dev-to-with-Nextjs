import Link from "next/link";

export default function UserMenu() {
  return (
    <div className="user-menu flex items-center gap-4">
      <Link href="/new">Create Post</Link>
      <button className="p-2">
        <img
          src="/icons/bell-icon.png"
          alt="Notifications"
          className="h-6 w-6"
        />
      </button>
      <img src="" alt="" className="h-8 w-8 rounded-full" />
    </div>
  );
}
