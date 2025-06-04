import React from "react";
import MyPortfolioSideBar1 from "../components/MyPortfolioSideBar1";
import MyPortfolioPlantitotitaCard from "../components/MyPortfolioPlantitotitaCard";
import MyPortfolioPcgInventorySystemCard from "../components/MyPortfolioPcgInventorySystemCard";

function MyPortfolioPageTwo() {
  return (
    <>
      <div className="lg:w-screen lg:h-screen md:min-w-[850px] md:min-h-[768px] grid grid-cols-5 grid-rows-5 gap-4 bg-[#F9EEE8]">
        <div className="flex items-center justify-center col-span-3 col-start-2">
          <h1 className="font-antonio font-bold lg:text-[65px] md:text-[55px] text-[#31302D]">
            MY PROJECTS
          </h1>
        </div>
        <div className="flex flex-row justify-center col-span-5 row-span-4 row-start-2 lg:gap-8 md:gap-0">
          <MyPortfolioPlantitotitaCard />
          <MyPortfolioPcgInventorySystemCard />
        </div>
      </div>
    </>
  );
}

export default MyPortfolioPageTwo;
