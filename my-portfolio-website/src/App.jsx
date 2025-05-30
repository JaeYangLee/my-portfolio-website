import React, { useState } from "react";
import "./index.css";
import MyPortfolioPageTwo from "./pages/MyPortfolioPageTwo";
import MyPortfolioSideBar1 from "./components/MyPortfolioSideBar1";
import MyPortfolioPageOne from "./pages/MyPortfolioPageOne";
import MyPortfolioPageThree from "./pages/MyPortfolioPageThree";
import MyPortfolioPageFour from "./pages/MyPortfolioPageFour";
import MyPortfolioPageFive from "./pages/MyPortfolioPageFive";

function App() {
  return (
    <>
      <div className="w-full h-full overflow-y-scroll scroll-smooth">
        <div className="fixed right-0 flex z-60">
          <MyPortfolioSideBar1 pageNumber={"444"} />
        </div>
        <section className="h-full">
          <MyPortfolioPageOne />
        </section>
        <section className="h-full">
          <MyPortfolioPageTwo />
        </section>
        <section className="h-full">
          <MyPortfolioPageThree />
        </section>
        <section className="h-full">
          <MyPortfolioPageFour />
        </section>
        <section className="h-full">
          <MyPortfolioPageFive />
        </section>
      </div>
    </>
  );
}

export default App;
