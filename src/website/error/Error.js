import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-h w-full relative">
      <img
        src="https://imgur.com/FkHCrdg.jpg"
        alt="error"
        className="error-h border-d w-full"
      />
      <div className="absolute top-0 left-0 w-full">
        <div className="container mx-auto">
          <div className="flex items-center error-h text-center w-full justify-center">
            <div>
              <h5 className="fsize70 sm-fsize40 mtpx1 mbpx1 textwhite">404</h5>
              <h6 className="fsize40 sm-fsize20 mtpx1 mbpx10 textwhite">
                Page Not Found
              </h6>
              <div className="flex justify-center">
                <NavLink to="/home">
                  <button className="whitebtn fsize16 sm-fsize13 font-500 cursor-pointer plpx30 prpx30 sm-mtpx5 sm-ptpx10 sm-pbpx10 ptpx12 pbpx12 rounded-5">
                    back to Home
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Error;
