import React from "react";
import image1 from "../imgs/iphone-12-pro-graphite-hero.png";
import image2 from "../imgs/images.jpeg";
import SectionHeading from "../common/SectionHeading";

const OrderDetails = () => {
  return (
    <div className="grid m-1 col-span-1 border rounded-md p-5">
      <div>
        <div className="text-center border-b-2 p-2">Order Details</div>
        <div className="grid grid-cols-3 mt-5">
          <div className="grid col-span-1">
            <img src={image1} alt="iphone image" />
          </div>
          <div className="grid col-span-2">
            <div>
              <SectionHeading title="Apple iphone 12 XR - 64 GB space gray" />
              <div>
                <div className="text-xs font-thin">Quantity: 2</div>
                <div className="text-xs font-thin">409.406.3322</div>
                <div className="text-xs font-thin">409.406.3322</div>
              </div>
            </div>
          </div>
          <div className="grid col-span-1">
            <img src={image2} alt="iphone image" />
          </div>
          <div className="grid col-span-2">
            <div>
              <SectionHeading title="Apple iphone 12 XS - 64 GB space gray" />
              <div>
                <div className="text-xs font-thin">Quantity: 2</div>
                <div className="text-xs font-thin">409.406.3322</div>
                <div className="text-xs font-thin">409.406.3322</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
