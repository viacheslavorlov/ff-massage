
import { useState } from "preact/hooks";
import { navItems } from "../config/menu";

type Props = {
  className?: string;
};

const MobileMenu = ({ className }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return isVisible ? (
    <div
      className={`absolute top-4 bottom-0 left-0 right-0 flex md:pb-4 h-screen w-screen flex-col gap-6 items-center justify-center bg-black lg:hidden ${className}`}
    >
      {navItems.map((item) => (
        <>
          <div key={item.url} className="animate-slide-in" onClick={() => setIsVisible(false)}>
            <a className="text-primary" href={item.url}>
              {item.title}
            </a>
          </div>
        </>
      ))}
      <img
        src="/images/icons/close_icon.svg"
        onClick={() => setIsVisible(false)}
        className="absolute right-6 top-0  h-8 w-8 rounded-full p-1 lg:hidden border-primary  border"
        alt="закрыть"
      />
    </div>
  ) : (
    <div className="absolute right-6 top-4  h-8 w-8 rounded-full border border-primary p-1 lg:hidden">

      <img
        onClick={() => setIsVisible((prev) => !prev)}
        src={"/images/icons/menu.svg"}
        className="m-auto"
        alt="меню"
      />
    </div>
  );
};

export default MobileMenu;
