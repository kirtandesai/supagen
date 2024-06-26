import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="font-medium">
      <Image src="/logo.png" alt="Logo" width={40} height={40} />
    </Link>
  );
}
