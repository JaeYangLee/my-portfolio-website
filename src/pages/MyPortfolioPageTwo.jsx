import React from "react";
import MyPortfolioSideBar1 from "../components/MyPortfolioSideBar1";
import MyPortfolioPlantitotitaCard from "../components/MyPortfolioPlantitotitaCard";
import MyPortfolioPcgInventorySystemCard from "../components/MyPortfolioPcgInventorySystemCard";

function MyPortfolioPageTwo() {
  return (
    <>
      <div className="w-[640px] min-h-[1080px] lg:min-w-full lg:min-h-screen md:min-w-[850px] md:min-h-[768px] grid grid-cols-5 grid-rows-5 gap-4 bg-[#F9EEE8]">
        <div className="flex items-center justify-center col-span-3 col-start-2">
          <h1 className="font-antonio font-bold text-[76px] lg:text-[65px] md:text-[55px] text-[#31302D]">
            MY PROJECTS
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center col-span-5 row-span-4 row-start-2 gap-4 lg:flex-row md:flex-row lg:gap-8 md:gap-4">
          <MyPortfolioPlantitotitaCard />
          <MyPortfolioPcgInventorySystemCard />
        </div>
      </div>
    </>
  );
}

export default MyPortfolioPageTwo;
