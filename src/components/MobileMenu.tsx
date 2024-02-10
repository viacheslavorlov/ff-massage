import { useState } from "react";
import { navItems } from "~/config/menu";
import Link from "./Link.astro";

type Props = {
  className?: string;
};

const MobileMenu = ({ className }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return isVisible ? (
    <div
      className={`absolute top-4 flex w-full flex-col items-center justify-center bg-black lg:hidden ${className}`}
    >
      {navItems.map((item) => (
        <>
          <div key={item.url} className="animate-slide-in" onClick={() => setIsVisible(false)}>
            <a className="text-[#fb923c]" href={item.url}>
              {item.title}
            </a>
          </div>
        </>
      ))}
      <img
        src="/images/icons/close-button.svg"
        onClick={() => setIsVisible(false)}
        className="absolute right-10 top-0  h-10 w-10 lg:hidden"
        alt="закрыть"
      />
    </div>
  ) : (
    <img
      onClick={() => setIsVisible((prev) => !prev)}
      src={"/images/icons/menu.svg"}
      className="absolute right-6 top-4 h-10 w-10 lg:hidden"
      alt="меню"
    />
  );
};

export default MobileMenu;
