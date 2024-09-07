import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavItemProps {
  href: string;
  icon: any;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => {
  return (
    <li className="mb-2">
      <a href={href} className="flex items-center p-2">
        <span className="mr-2" style={{ fontSize: "20px" }}>
          <FontAwesomeIcon icon={icon} />
        </span>
        {label}
      </a>
    </li>
  );
};

export default NavItem;
