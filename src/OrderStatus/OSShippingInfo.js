import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faCheckCircle,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import SectionHeading from "../common/SectionHeading";
import Alert from "../common/Alert";

const OSShippingInfo = () => {
  return (
    <div className="grid col-span-1 m-1 md:col-span-2 p-5 border rounded-md">
      <SectionHeading title="Heads up: The shipping date changed" />
      <div className="text-xs font-thin">
        Before we can complete the order, review the new date to confirm if you
        are okay with it
      </div>
      <div className="grid grid-cols-3 gap-3 mt-7 text-center">
        <div>
          <FontAwesomeIcon icon={faCheckCircle} size="3x" />
          <hr className="mt-1 p-1 border-black" />
          <div>Ordered</div>
        </div>
        <div>
          <FontAwesomeIcon icon={faShippingFast} size="3x" />
          <hr className="mt-1 p-1 border-black" />
          <div>Shipped</div>
        </div>
        <div>
          <FontAwesomeIcon icon={faHome} size="3x" />
          <hr className="mt-1 p-1 border-black" />
          <div>Delivered</div>
        </div>
      </div>
      <br />
      <div className="grid-cols-1">
        <SectionHeading title="Items ordered:3" />
        <br />
        <br />
        <Alert
          error
          message="Don't forget to let us know if you accept the new ship date. we will cancel your order if we dont hear from you"
        />
        <br />
        <SectionHeading title="New Estimated ship date:" />
        <div>Mon, Apr 29 - Sat, May.4, 2019</div>
        <br />
        <SectionHeading title="Orginal estimated ship date:" />
        <div>Mon, Apr.19 - Sat, Apr.24, 2019</div>
        <span>
          <SectionHeading title="Adress:" />
          Saint Ann, Hanover park, IL, 60133.
        </span>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <button
          type="submit"
          className="block justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Accept new ship date
        </button>
        <button
          type="button"
          className="block bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel your order
        </button>
      </div>
    </div>
  );
};

export default OSShippingInfo;
