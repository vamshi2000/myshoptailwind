import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [showMenu, showMenuSetter] = useState(false);
  return (
    <div className="container">
      <button
        className="p-2 overflow-hidden"
        onClick={() => {
          showMenuSetter(!showMenu);
        }}
      >
        <svg className="h-8 w-12 fill-current" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            fill="#fff"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
      {showMenu === true && (
        <nav>
          <ul
            className="bg-white absolute pl-5 pt-2 z-50 min-h-150 left-0 w-5/12"
            id="mobileNav"
          >
            <button
              onClick={() => {
                showMenuSetter(!showMenu);
              }}
              className="block leading-8"
            >
              <Link to="/">Home</Link>
            </button>
            <button
              onClick={() => {
                showMenuSetter(!showMenu);
              }}
              className="block leading-8"
            >
              <Link to="/orderstatus">Order Status&nbsp;</Link>
            </button>
            <button
              onClick={() => {
                showMenuSetter(!showMenu);
              }}
              className="block leading-8"
            >
              Account
            </button>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileHeader;
