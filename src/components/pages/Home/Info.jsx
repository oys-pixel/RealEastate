import { IoHomeOutline } from "react-icons/io5";
import { SiSpringsecurity } from "react-icons/si";
import img1 from "../../assets/Illustration.png";
import { CgDollar } from "react-icons/cg";
import { PiArrowFatLineDownLight } from "react-icons/pi";
import { FaPercentage } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImHome2 } from "react-icons/im";

const Info = () => {
  return (
    <div className="info-wrapper">
      <div className="myContainer">
        <div className="info-blocks">
          <div className="info-block-colored">
            <div className="info-cont">
              <h1>The new way to find your new home</h1>
              <p>
                Find your dream place to live in with more than 10k+ properties
                listed.
              </p>
              <button>Browse Properties</button>
            </div>
            <img src={img1} alt="house Illustration" />
          </div>
          <div className="infohalf">
            <div className="info-block">
              <div className="box">
                <IoHomeOutline />

                <i>
                  <SiSpringsecurity />
                </i>
              </div>
              <h2>Property Insurance</h2>
              <p>
                We offer our customer property protection of liability coverage
                and insurance for their better life.
              </p>
              <div className="box">
                <PiArrowFatLineDownLight />
                <i>
                  <CgDollar />
                </i>
              </div>
              <h2>Lowest Commission</h2>
              <p>
                You no longer have to negotiate commissions and haggle with
                other agents it only cost 2%!
              </p>
            </div>
            <div className="info-block">
              <div className="box">
                <FaPercentage />

                <i>
                  <SiSpringsecurity />
                </i>
              </div>
              <h2>Best Price</h2>
              <p>
                Not sure what you should be charging for your property? No need
                to worry, let us do the numbers for you.
              </p>
              <div className="box">
                <FaLocationDot />

                <i>
                  <ImHome2 />
                </i>
              </div>
              <h2>Overall Control</h2>
              <p>
                Get a virtual tour, and schedule visits before you rent or buy
                any properties. You get overall control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
