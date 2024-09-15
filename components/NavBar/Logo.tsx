import Link from "next/link";

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <img src="/dev-icon.png" alt="Logo" className="h-10" />
      </Link>
    </div>
  );
}
