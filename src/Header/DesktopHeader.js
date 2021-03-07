import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faUser } from "@fortawesome/free-solid-svg-icons";

const DesktopHeader = () => {
  return (
    <div className="grid grid-cols-12 text-sm">
      <div className="text-white">
        Products &nbsp;
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="text-white">
        Brands&nbsp;
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="text-white">
        Deals&nbsp;
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="text-white">
        Services&nbsp;
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="text-white"></div>
      <div className="text-white"></div>
      <div className="text-white"></div>
      <div className="text-white"></div>
      <div className="text-white"></div>
      <div className="text-white">
        <FontAwesomeIcon icon={faUser} />
        Account&nbsp;
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="text-white">
        <Link to="/orderstatus">Order Status&nbsp;</Link>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="text-white">
        Saved Items&nbsp;
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
};

export default DesktopHeader;
