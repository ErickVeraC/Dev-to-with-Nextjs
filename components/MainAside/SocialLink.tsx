interface SocialLinkProps {
  href: string;
  title: string;
  svgPath: React.ReactNode;
}

export function SocialLink({ href, title, svgPath }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-2 hover:bg-[#636bd5] hover:rounded-md"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="img"
        aria-labelledby={`${title}-icon`}
        className="crayons-icon c-link__icon"
      >
        <title id={`${title}-icon`}>{title}</title>
        {svgPath}
      </svg>
    </a>
  );
}
