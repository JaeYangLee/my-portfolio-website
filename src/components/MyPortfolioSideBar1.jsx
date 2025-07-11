import React from "react";

const MyPortfolioSideBar1 = ({ pageNumber }) => {
  return (
    <>
      <div className=" flex flex-col m-0 bg-[#31302D] w-[50px] h-full lg:w-[50px] lg:h-screen md:min-w-[40px] md:min-h-[100vh]">
        <div className="bg-[#C6BF8B] text-[12px] w-[50px] h-[200px] lg:w-[50px] lg:h-[200px] md:w-[40px] md:h-[152px] font-bold font-mono flex flex-col items-center justify-center">
          <p>ジ </p>
          <p>ア</p>
          <p> ン </p>
          <br />
          <p>リ </p>
          <p>ー</p>
        </div>
        <div className=" flex flex-col justify-center items-center font-mono w-[50px] h-[1060px] lg:h-full md:h-[540px] border-l border-[#F9EEE8] text-[#F9EEE8] text-[12px]">
          <p>1</p>
          <p>4</p>
          <p>.</p>
          <p>8</p>
          <p>1</p>
          <p>4</p>
          <p>3</p>
          <p>°</p>
          <br />
          <p>N</p>
          <p>/</p>
          <br />
          <p>1</p>
          <p>2</p>
          <p>1</p>
          <p>.</p>
          <p>0</p>
          <p>7</p>
          <p>2</p>
          <p>5</p>
          <p>°</p>
          <br />
          <p>E</p>
        </div>
        <div className="bg-[#F9EEE8] w-[50px] h-[50px] lg:w-[50px] lg:h-[50px] md:h-[48px] border-l border-[#F9EEE8] text-[16px] font-bold font-mono flex items-center justify-center">
          <h1 className="">0{pageNumber}</h1>
        </div>
      </div>
    </>
  );
};

export default MyPortfolioSideBar1;
