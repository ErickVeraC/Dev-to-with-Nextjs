const NavList: React.FC = ({ items }) => {
  return (
    <section name="list-bar">
      <ul className="flex flex-col mb-3">
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs ">&#127968;</span>
            Home
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128229;</span>
            Reading List
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#127897;</span>
            Podcast
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#127909;</span>
            Videos
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center p-2 gap-2">
            <span className="p-2 text-xs">&#127991;</span>
            Tags
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center p-2 gap-2">
            <span className="p-2 text-xs">&#128161;</span>
            DEV Help
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center p-2 gap-2">
            <span className="p-2 text-xs">&#128717;</span>
            Forem Shop
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#10084;</span>
            Advertise on DEV
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#127942;</span>
            DEV Challenges
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#10024;</span>
            DEV Showcase
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">
              <img
                src="/dev-icon.png"
                id="icondev"
                alt="Icono de DEV"
                width="30px"
              />
            </span>
            About
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128239;</span>
            Contact
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128214;</span>
            Guides
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#129300;</span>
            Software comparisons
          </button>
        </li>
        <p>Other</p>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#128077;</span>
            Code of Conduct
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2">
            <span className="p-2 text-xs">&#129299;</span>
            Privacy Policy
          </button>
        </li>
        <li className="cursor-pointer hover:bg-[#e6e7f4] hover:text-[#3e4adf] hover:rounded-md hover:underline">
          <button href="#" className="flex items-center px-2 gap-2 ">
            <span className="p-2 text-xs">&#128064;</span>
            Terms of use
          </button>
        </li>
      </ul>
    </section>
  );
};

export default NavList;
