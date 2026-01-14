import { useState } from "react";
import img1 from "../../assets/c4377ede4947d2c0e0b69d832c0da5edc6d836df.jpg";
import {
  Area,
  BathRoom,
  BedRoom,
  Heart,
  Sparkle,
} from "../../Includes/Svgs/Svg";
const Property = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const PropertyCard = [
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
    {
      img: img1,
      price: "$2,095",
      PropertyTime: "/month",
      name: "Palm Harbor",
      dec: "2699 Green Valley, Highland Lake, FL",
      ast1: "Beds",
      ast1Quantity: "3",
      ast2: "Bathrooms",
      ast2Quantity: "2",
      size: "5x7 m²",
    },
  ];
  const toggleProducts = () => {
    visibleCount >= PropertyCard.length
      ? setVisibleCount(3)
      : setVisibleCount((prev) => prev + 3);
  };
  return (
    <div className="property-container">
      <div className="property-list">
        {PropertyCard.slice(0, visibleCount).map((item, index) => {
          return (
            <div className="my-card" key={index}>
              <img src={item.img} alt="property name" />
              <div className="prop-card df">
                {index < 3 ? (
                  <button className="center">
                    <Sparkle />
                    POPULAR
                  </button>
                ) : null}
                <div className="df card-info">
                  <div className="price-card card-item">
                    <p className="prop-price">
                      <span>{item.price}</span>
                      {item.PropertyTime}
                    </p>
                    <div className="name-card card-item">
                      <h3>{item.name}</h3>
                      <p className="card-item">{item.dec}</p>
                    </div>
                  </div>
                  <div className="like-card ">
                    <span className="center">
                      <i>
                        <Heart />
                      </i>
                    </span>
                  </div>
                </div>
                <div className="df card-btns card-item">
                  <span className="center">
                    <i>
                      <BedRoom />
                    </i>
                    <p>
                      {item.ast1Quantity} {item.ast1}
                    </p>
                  </span>
                  <span className="center">
                    <i>
                      <BathRoom />
                    </i>
                    <p>
                      {item.ast1Quantity} {item.ast2}
                    </p>
                  </span>
                  <span className="center">
                    <i>
                      <Area />
                    </i>
                    <p>{item.size}</p>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>{" "}
      {visibleCount < PropertyCard.length ? (
        <button className="list-end-btn center" onClick={toggleProducts}>
          Browse more properties
        </button>
      ) : (
        <button className="list-end-btn center" onClick={toggleProducts}>
          Browse less properties
        </button>
      )}
    </div>
  );
};
export default Property;
