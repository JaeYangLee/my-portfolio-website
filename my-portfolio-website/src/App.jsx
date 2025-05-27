import React, { useState } from "react";
import "./index.css";
import MyPortfolioPageTwo from "./pages/MyPortfolioPageTwo";
import MyPortfolioSideBar1 from "./components/MyPortfolioSideBar1";
import MyPortfolioPageOne from "./pages/MyPortfolioPageOne";
import MyPortfolioPageThree from "./pages/MyPortfolioPageThree";
import MyPortfolioPageFour from "./pages/MyPortfolioPageFour";

function App() {
  return (
    <>
      <div className="w-full h-screen overflow-y-scroll scroll-smooth">
        <div className="fixed right-0 flex">
          <MyPortfolioSideBar1 pageNumber={"444"} />
        </div>
        <section className="h-screen snap-start">
          <MyPortfolioPageOne />
        </section>
        <section className="h-screen snap-start">
          <MyPortfolioPageTwo />
        </section>
        <section className="h-screen snap-start">
          <MyPortfolioPageThree />
        </section>
        <section className="h-screen snap-start">
          <MyPortfolioPageFour />
        </section>
      </div>
    </>
  );
}

export default App;
