import Link from "next/link";
import Image from "next/image";

export default function CreatePostMenu() {
  return (
    <nav className="px-2 pt-2 gap-2 w-full flex flex-row items-center">
      <Link href={"/"} className="">
        <Image src="/dev-icon.png" alt="Logo" width={44} height={40} />
      </Link>
      <section className="flex flex-row w-full justify-between items-center">
        <h1 className="text-xl">Create Post</h1>

        <div className="flex gap-4 items-center">
          <span>Edit</span>
          <span>Preview</span>
        </div>

        <Link href={"/"}>
          <button className="text-xl font-semibold">&times;</button>
        </Link>
      </section>
    </nav>
  );
}
