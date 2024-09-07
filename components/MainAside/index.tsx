import NavList from "./NavList";
import { SocialLinks } from "./SocialLinks";

export default function MainAside() {
  return (
    <aside>
      <article className="bg-white shadow-md rounded-lg mb-3">
        <div className="p-4">
          <h5 className="text-lg font-semibold">
            DEV Community is a community of 1,513,398 amazing developers
          </h5>
          <p className="text-base">
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
          <a
            href="login.html"
            className="border border-blue-500 text-blue-500 flex justify-center py-2 px-4 rounded"
          >
            Create an account
          </a>
        </div>
      </article>
      <NavList />
      <SocialLinks />
      <div>
        <p>
          DEV Community A constructive and inclusive social network for software
          developers. With you every step of your journey.
        </p>
        <p>
          Built on Forem — the open source software that powers DEV and other
          inclusive communities.
        </p>
        <p>Made with love and Ruby on Rails. DEV Community © 2016 - 2024.</p>
      </div>
    </aside>
  );
}
