import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="auth-buttons flex gap-4">
      <Link href="/enter">Log in</Link>
      <Link href="/create-account">Create account</Link>
    </div>
  );
}
