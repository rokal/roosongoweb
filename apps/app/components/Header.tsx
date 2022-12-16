import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { isSearchPage } from "utils/utils";
import { useRouter } from "next/router";

const RoosongoLogo = () => (
  <div className="flex justify-center align-middle">
    <span className="sr-only">Roosongo</span>
    <Image
      className="w-auto h-8 sm:h-10"
      src="/images/roosongo.svg"
      alt="Logo"
      width={40}
      height={32}
    />
  </div>
);

export const Header = () => {
  const router = useRouter();
  const searchPage = isSearchPage(router.pathname);
  return (
    <div className={cn("px-4 mx-auto  sm:px-6 ", { "max-w-7xl": !searchPage })}>
      <div className="flex items-center justify-between py-2 border-gray-200 border-b-1 drop-shadow-sm">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <RoosongoLogo />
          </Link>
        </div>
      </div>
    </div>
  );
};
