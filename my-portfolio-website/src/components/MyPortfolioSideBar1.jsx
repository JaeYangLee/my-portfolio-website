import React from "react";

function MyPortfolioSideBar1({ pageNumber }) {
  return (
    <>
      <div className="flex flex-col m-0 bg-[#31302D] w-[50px] h-screen">
        <div className="bg-[#C6BF8B] text-[12px] w-[50px] h-[200px] font-bold font-mono flex flex-col items-center justify-center">
          <p>ジ </p>
          <p>ア</p>
          <p> ン </p>
          <p>リ </p>
          <br />
          <p>ー</p>
        </div>
        <div className=" flex flex-col justify-center items-center font-mono h-full border-l border-[#F9EEE8] text-[#F9EEE8] text-[12px]">
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
        <div className="bg-[#F9EEE8] w-[50px] h-[50px] border-l border-[#F9EEE8] text-[16px] font-bold font-mono flex items-center justify-center">
          <h1 className="">{pageNumber}</h1>
        </div>
      </div>
    </>
  );
}

export default MyPortfolioSideBar1;
