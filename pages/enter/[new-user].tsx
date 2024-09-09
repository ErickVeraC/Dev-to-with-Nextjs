import { socialSessionButtons } from "@/components/Icons";
import Link from "next/link";

export default function NewUser() {
  return (
    <div className="w-3/4 p-4 mx-auto">
      <section className="flex flex-col gap-4 items-center text-center">
        <img className="h-16" src="/dev-icon.png" alt="" />
        <h1 className="text-3xl font-bold">Join the DEV Community</h1>
        <p className="text-gray-600">
          DEV Community is a community of 2,015,351 amazing developers
        </p>
      </section>
      <section className="flex flex-col p-2 gap-2">
        {socialSessionButtons.map((button, index) => (
          <button
            key={index}
            className="w-full bg-transparent border border-[#d4d4d4] rounded hover:bg-gray-100 cursor-pointer flex items-center p-2"
          >
            <div className="flex items-center w-full">
              <div className="mr-2">{button.icon}</div>
              <div className="flex-grow text-sm text-center">{button.name}</div>
            </div>
          </button>
        ))}
        <Link href="/enter/sign-up">
          <div className="w-full bg-transparent border border-[#d4d4d4] rounded hover:bg-gray-100 cursor-pointer flex items-center p-2">
            <div className="flex items-center w-full">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  className="crayons-icon crayons-icon--default"
                >
                  <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001z"></path>
                </svg>
              </div>
              <div className="flex-grow text-sm text-center">
                Sign up with Email
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-row justify-center">
          <p className="w-3/4 py-2 text-[#a1a1a1] text-sm text-center">
            By signing in, you are agreeing to our{" "}
            <span className="text-[#3b49df]">privacy policy</span>,{" "}
            <span className="text-[#3b49df]">terms of use</span> and{" "}
            <span className="text-[#3b49df]">code of conduct</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
