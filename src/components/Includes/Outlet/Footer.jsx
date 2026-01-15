import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img1 from "../../assets/Frame 14074.png";
import { FaChevronUp } from "react-icons/fa";
import { Clock, Envelop, Location, Phone } from "../Svgs/Svg";

function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="Footer-wrapper relative">
        <button
          className="back-to-top"
          onClick={scrollToTop}
          style={{ display: visible ? "flex" : "none" }}
        >
          <i>
            <FaChevronUp />
          </i>
        </button>
        <div className="myContainer footer-gap">
          <div className="footer-img">
            <img src={img1} alt="" />
          </div>
          <div className="df offlinks">
            <div className="footer-office">
              <h1>Office</h1>
              <ul>
                <li>
                  <i>
                    <Phone />
                  </i>{" "}
                  <p>+800 123 456 789</p>
                </li>
                <li>
                  <i>
                    <Envelop />
                  </i>{" "}
                  <p>info@demo.co</p>
                </li>
                <li>
                  <i>
                    <Location />
                  </i>
                  <p>2231 Redbud Drive Whitestone, NY 11357</p>
                </li>
                <li>
                  <i>
                    {" "}
                    <Clock />
                  </i>
                  <p>Mon – Fri: 9 AM – 7 PM Sat – Sun: Closed</p>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h1>Quick Links</h1>
              <ul>
                <li>Home</li>
                <li>PROJECTS</li>
                <li>AREA</li>
                <li>News</li>
                <li>Gallery</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <h1>Social Links</h1>
            <div className="links df">
              <span>
                <i>
                  <FaFacebook />
                </i>
              </span>
              <span>
                <i>
                  <FaTwitter />
                </i>
              </span>
              <span>
                <i>
                  <FaLinkedinIn />
                </i>
              </span>
              <span>
                <i>
                  <FaInstagram />
                </i>
              </span>
            </div>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="myContainer">
            <p>© 2022, ALL RIGHTS RESERVED | Whetstonez</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
