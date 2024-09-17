import Image from "next/image";

const NavList: React.FC = () => {
  return (
    <section>
      <ul className="flex flex-col mb-3">
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#127968;</span>
            <span className="hover:underline">Home</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128229;</span>
            <span className="hover:underline">Reading List</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#127897;</span>
            <span className="hover:underline">Podcast</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#127909;</span>
            <span className="hover:underline">Videos</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#127991;</span>
            <span className="hover:underline">Tags</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128161;</span>
            <span className="hover:underline">DEV Help</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128717;</span>
            <span className="hover:underline">Forem Shop</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#10084;</span>
            <span className="hover:underline">Advertise on DEV</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#127942;</span>
            <span className="hover:underline">DEV Challenges</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#10024;</span>
            <span className="hover:underline">DEV Showcase</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">
              <Image src="/dev-icon.png" alt="Logo" width={20} height={16} />
            </span>
            <span className="hover:underline">About</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128239;</span>
            <span className="hover:underline">Contact</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128214;</span>
            <span className="hover:underline">Guides</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#129300;</span>
            <span className="hover:underline">Software comparisons</span>
          </button>
        </li>
        <p className="p-2 font-bold">Other</p>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128077;</span>
            <span className="hover:underline">Code of Conduct</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#129299;</span>
            <span className="hover:underline">Privacy Policy</span>
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md">
          <button className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128064;</span>
            <span className="hover:underline">Terms of use</span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default NavList;
