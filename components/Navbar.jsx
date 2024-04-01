import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Link href="/">
          <Image
            height={20}
            width={100}
            className="max-w-[100px] md:max-w-[165px]"
            src="/lws_logo.png"
            alt="Lws"
          />
        </Link>

       <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
