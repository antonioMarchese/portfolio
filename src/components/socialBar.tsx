import Image from "next/image";
import Link from "next/link";

export default function SocialBar() {
  return (
    <div className="fixed top-0 left-4 hidden sm:flex sm:flex-col sm:gap-y-2 sm:justify-center sm:items-center">
      <div className="w-0.5 h-40 bg-zinc-500" />
      <Link href="https://github.com/antonioMarchese" target="_blank">
        <Image
          width={40}
          height={40}
          src="./github.svg"
          alt="Author's Github"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/antonio-marchese-54a12120b/"
        target="_blank"
      >
        <Image
          width={30}
          height={30}
          src="./linkedin.svg"
          alt="Author's Linkedin"
        />
      </Link>
    </div>
  );
}
