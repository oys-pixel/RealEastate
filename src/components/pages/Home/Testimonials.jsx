import { House, Notes, PlayBtn } from "../../Includes/Svgs/Svg";

const Testimonials = () => {
  const testBox = [
    {
      svg: <PlayBtn />,
      head: "Virtual home tour",
      dec: " You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.",
    },
    {
      svg: <House />,
      head: "Find the best deal",
      dec: " Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!",
    },
    {
      svg: <Notes />,
      head: "Get ready to apply",
      dec: " Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!",
    },
  ];
  const rate = [
    {
      hed: "7.4%",
      dec: "Property Return Rate",
    },
    {
      hed: "3,856",
      dec: "Property in Sell & Rent",
    },
    {
      hed: "2,540",
      dec: "Daily Completed Transactions",
    },
  ];
  return (
    <div className="test-wrapper">
      <div className="myContainer">
        <div className="testHed df">
          <div className="testleft">
            <h1>
              We make it easy for <span>tenants</span> and{" "}
              <span>landlords.</span>
            </h1>
          </div>
          <div className="testright">
            <p>
              Whether it’s selling your current home, getting financing, or
              buying a new home, we make it easy and efficient. The best part?
              you’ll save a bunch of money and time with our services.
            </p>
          </div>
        </div>
      </div>
      <div className="testBox df">
        {testBox.map((item, index) => {
          return (
            <div className={`testInfo df img-${index + 1}`} key={index}>
              <div>
                <i>{item.svg}</i>
              </div>
              <div className="testdec">
                <h2>{item.head}</h2>
                <p>{item.dec}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="myContainer">
        <div className="ratingbox center">
          {rate.map((item, index) => {
            return (
              <div className="rating" key={index}>
                <h2>{item.hed}</h2>
                <p>{item.dec}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
