import NavItem from "./NavItem";
import {
  faHome,
  faBook,
  faPodcast,
  faVideo,
  faTags,
  faQuestionCircle,
  faShoppingCart,
  faHeart,
  faTrophy,
  faStar,
  faEnvelope,
  faBookOpen,
  faBalanceScale,
  faThumbsUp,
  faShieldAlt,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { href: "#", icon: faHome, label: "Home" },
  { href: "#", icon: faBook, label: "Reading List" },
  { href: "#", icon: faPodcast, label: "Podcast" },
  { href: "#", icon: faVideo, label: "Videos" },
  { href: "#", icon: faTags, label: "Tags" },
  { href: "#", icon: faQuestionCircle, label: "DEV Help" },
  { href: "#", icon: faShoppingCart, label: "Forem Shop" },
  { href: "#", icon: faHeart, label: "Advertise on DEV" },
  { href: "#", icon: faTrophy, label: "DEV Challenges" },
  { href: "#", icon: faStar, label: "DEV Showcase" },
  {
    href: "#",
    icon: <img src="/dev-icon.png" alt="Icono de DEV" width="30px" />,
    label: "About",
  },
  { href: "#", icon: faEnvelope, label: "Contact" },
  { href: "#", icon: faBookOpen, label: "Guides" },
  { href: "#", icon: faBalanceScale, label: "Software comparisons" },
  { href: "#", icon: faThumbsUp, label: "Code of Conduct" },
  { href: "#", icon: faShieldAlt, label: "Privacy Policy" },
  { href: "#", icon: faEye, label: "Terms of use" },
];

const NavList: React.FC = () => {
  return (
    <section name="list-bar">
      <ul className="flex flex-col mb-3">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
        <p className="text-uppercase font-bold">Other</p>
      </ul>
    </section>
  );
};

export default NavList;
