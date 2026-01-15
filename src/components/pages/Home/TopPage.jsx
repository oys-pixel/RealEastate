import img1 from "././../../assets/Image.png";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { HiKey } from "react-icons/hi";
import { BiBuildings } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";

function TopPage() {
  const infoRents = [
    {
      num: "10k+",
      dec: "renters",
    },
    {
      num: "50k+",
      dec: "properties",
    },
  ];
  return (
    <>
      <div className="top-fluid">
        <div className="myContainer">
          <div className="df">
            <div className="top-left">
              <h1>Buy, rent, or sell your property easily</h1>
              <p className="info-text">
                A great platform to buy, sell, or even rent your properties
                without any commisions.
              </p>
              <div className="tab-view-info">
                {infoRents.map((item, index) => (
                  <div className="ourinfo" key={index}>
                    <h2>{item.num}</h2>
                    <p>{item.dec}</p>
                  </div>
                ))}
              </div>
              <div className="topbtns-search">
                <div className="center mini-top-btns">
                  <button>Rent</button>
                  <button>Buy</button>
                  <button>Sell</button>
                </div>
                <div className="web-view-prop">
                  <div>
                    <span>
                      <p>Location</p>
                      <p className="area">Barcelona, Spain</p>
                    </span>
                  </div>
                  <div>
                    <span>
                      <p>When</p>
                      <p className="area ar-img">
                        Select Move-in Date <MdOutlineCalendarMonth />
                      </p>
                    </span>
                  </div>
                  <div className="center ">
                    <button>Browse Properties</button>
                  </div>
                </div>
                <div className="tab-view-prop">
                  <div className="fst-tab-view">
                    <span>
                      <p>Location</p>
                      <p className="area">Barcelona, Spain</p>
                    </span>
                  </div>
                  <div>
                    <span>
                      <p>When</p>
                      <p className="area ar-img">
                        Select Move-in Date <MdOutlineCalendarMonth />
                      </p>
                    </span>
                  </div>
                  <div className="center ">
                    <button>
                      <FaSearch />
                    </button>
                  </div>
                </div>
                <div className="mob-view-prop">
                  <input type="text" />
                  <div className="center ">
                    <button>
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-box center">
                <div className="left-box">
                  <span className="box">
                    <IoIosPeople />

                    <i>
                      <HiKey />
                    </i>
                  </span>
                  <h2>50k+ renters</h2>
                  <p>believe in our service</p>
                </div>
                <div className="left-box">
                  <span className="box">
                    {" "}
                    <BiBuildings />
                    <i>
                      <FaSearch />
                    </i>
                  </span>
                  <h2>10k+ properties</h2>
                  <p>and house ready for occupancy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={img1} alt="House" className="my-top-img" />
      </div>
    </>
  );
}

export default TopPage;
