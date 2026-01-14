import { IoChevronForward } from "react-icons/io5";
import img1 from "../../assets/Image (1).png";
import { CgPlayButtonR } from "react-icons/cg";
import { ImHome2 } from "react-icons/im";

const Tour = () => {
  return (
    <div className="tour-wrapper">
      <div className="myContainer">
        <div className="tourcenter">
          <div className="tour-left">
            <div className="tour-btns">
              <button>For tenants</button>
              <button>For landlords</button>
            </div>
            <h1>We make it easy for tenants and landlords.</h1>
            <p>
              Whether it’s selling your current home, getting financing, or
              buying a new home, we make it easy and efficient. The best part?
              you’ll save a bunch of money and time with our services.
            </p>
            <button className="text-btn center">
              Show more
              <IoChevronForward />
            </button>
          </div>
          <div className="tour-right">
            <img src={img1} alt="" />
            <div className="msg center">
              <span className="tour-icon center">
                <CgPlayButtonR />
              </span>
              <span>
                <h3>Virtual home tour</h3>
                <p>We provide you with virtual tour</p>
              </span>
              <i></i>
            </div>
            <div className="msg-2 center">
              <span className="tour-icon-home center">
                <ImHome2 />
              </span>
              <span>
                <h3>Find the best deal</h3>
                <p>Browse thousands of properties</p>
              </span>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tour;
