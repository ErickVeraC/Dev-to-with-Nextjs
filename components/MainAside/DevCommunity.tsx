import Link from "next/link";

function DevCommunity() {
  return (
    <article className="bg-white shadow-md rounded-lg">
      <div className="p-2 text-center">
        <h5 className="text-lg font-semibold">
          DEV Community is a community of 1,513,398 amazing developers
        </h5>
        <p className="text-base">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <div className="auth-buttons flex flex-col gap-2 text-center p-2">
          <Link href="/enter/new-user">
            <div className="bg-transparent px-4 py-2 text-sm border border-[#3b49df] rounded-md text-[#3b49df] cursor-pointer hover:bg-[#3b49df] hover:text-white hover:underline">
              Create account
            </div>
          </Link>
          <Link href="/enter">
            <div className="bg-transparent px-4 py-2 text-sm rounded-md text-black cursor-pointer hover:bg-[#eeeefc] hover:text-[#3b49df] hover:underline">
              Log in
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DevCommunity;
