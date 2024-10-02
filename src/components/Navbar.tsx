import { useEffect, useState } from "react";
import gsap from "gsap";

export function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    const smallnav = document.querySelector("#small-nav");

    if (menu) {
      smallnav?.classList.remove("hidden");
      smallnav?.classList.add("flex");
      gsap.fromTo(
        smallnav,
        { right: "100%", opacity: 0 },
        {
          right: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.2)",
        }
      );
    } else {
      gsap.to(smallnav, {
        right: "100%",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          smallnav?.classList.add("hidden");
        },
      });
    }
  }, [menu]);

  return (
    <>
      <div className="absolute top-0 w-full h-20 flex flex-row justify-between items-center px-6">
        <img src="/logo.png" alt="Logo" />
        <img
          id="menu"
          src={menu ? "/close.png" : "/menu.png"}
          className="h-12 w-12 cursor-pointer"
          onClick={handleMenuClick}
          alt={menu ? "Close menu" : "Open menu"}
        />
      </div>
      <div
        id="small-nav"
        className="absolute top-20 w-full h-[500px] bg-transparent  justify-center items-center hidden"
      >
        <div className="w-[80%] h-full bg-mainGreen rounded-xl px-6 py-4">
          test
        </div>
      </div>
    </>
  );
}
