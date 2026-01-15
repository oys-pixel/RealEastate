import { Buy, Home, Key, Search } from "../../Includes/Svgs/Svg";
import Property from "./Property";

const Properties = () => {
  const propBtns = [
    {
      svg: <Key />,
      name: "Rent",
    },
    {
      svg: <Buy />,
      name: "Buy",
    },
    {
      svg: <Home />,
      name: "Sell",
    },
  ];
  return (
    <div className="proprs-wrapper">
      <div className="myContainer">
        <div className="prop-head">
          <h1>Based on your location</h1>
          <p>Some of our picked properties near you location.</p>
        </div>
        <div className="df prop-head-box ">
          <div className="prop-btns ">
            {propBtns.map((item, index) => {
              return (
                <button key={index}>
                  <i>{item.svg}</i>
                  {item.name}
                </button>
              );
            })}
          </div>
          <div className="prop-input center">
            <i>
              <Search />
            </i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <Property />
      </div>
    </div>
  );
};
export default Properties;
