import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <Image src="/dev-icon.png" width={46} height={50} alt="Dev Icon" />
      </Link>
    </div>
  );
}
