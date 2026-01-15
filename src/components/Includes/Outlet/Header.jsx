import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/Frame 14074.png";
import { Cross, MobNav, TabNav } from "../Svgs/Svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <>
      <div className="Header-wrapper">
        <div className="myContainer navbar">
          <div className="mob-nav">
            <img src={img1} alt="companey logo" />
            <button
              className="center tabnavbtn"
              ref={btnRef}
              onClick={toggleMenu}
            >
              {isOpen ? <Cross /> : <TabNav />}
            </button>
            <button className="mobview" ref={btnRef} onClick={toggleMenu}>
              {isOpen ? <Cross /> : <MobNav />}
            </button>
          </div>
          <div className={`animinav ${isOpen ? "open" : ""} `}>
            <ul>
              <li>Home</li>
              <li>Company Overview</li>
              <li>Projects</li>
              <li>Blogs</li>
              <button className="navcontact">Contact Us</button>
            </ul>
          </div>

          <div className="nav-center">
            <img src={img1} alt="compney logo" />
            <ul>
              <li>Home</li>
              <li>Company Overview</li>
              <li>Projects</li>
              <li>Blogs</li>
            </ul>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
