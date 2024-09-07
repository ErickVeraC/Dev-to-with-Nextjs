import React from "react";
import { socialLinks } from "./socialLinksData";
import { SocialLink } from "./SocialLink";

export function SocialLinks() {
  return (
    <section className="flex justify-around mb-4">
      {socialLinks.map((link, index) => (
        <SocialLink
          key={index}
          href={link.href}
          title={link.title}
          svgPath={link.svgPath}
        />
      ))}
    </section>
  );
}
