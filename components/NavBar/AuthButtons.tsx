import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="auth-buttons flex gap-4">
      <Link href="/enter">
        <div className="bg-transparent px-4 py-2 text-sm rounded-md text-black cursor-pointer hover:bg-[#eeeefc] hover:text-[#3b49df] hover:underline">
          Log in
        </div>
      </Link>
      <Link href="/enter/new-user">
        <div className="bg-transparent px-4 py-2 text-sm border border-[#3b49df] rounded-md text-[#3b49df] cursor-pointer hover:bg-[#3b49df] hover:text-white hover:underline">
          Create account
        </div>
      </Link>
    </div>
  );
}
