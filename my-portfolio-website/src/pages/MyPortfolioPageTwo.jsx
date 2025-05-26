import React from "react";
import MyPortfolioSideBar1 from "../components/MyPortfolioSideBar1";

function MyPortfolioPageTwo() {
  return (
    <>
      <div className="fixed top-0 right-0 z-50">
        <MyPortfolioSideBar1 />
      </div>

      <div className="m-0 flex flex-col justify-center items-center min-w-screen min-h-screen bg-[#F9EEE8]">
        <div className="font-bold font-antonio">
          <div className="grid grid-cols-5 grid-rows-3 gap-2">
            <div className="col-span-5">
              <h1 className="text-[100px] text-[#31302D]">MY PROJECTS</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPortfolioPageTwo;
