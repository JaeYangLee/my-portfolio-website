import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import MyPortfolioPageTwo from "./pages/MyPortfolioPageTwo";
import MyPortfolioSideBar1 from "./components/MyPortfolioSideBar1";
import MyPortfolioPageOne from "./pages/MyPortfolioPageOne";
import MyPortfolioPageThree from "./pages/MyPortfolioPageThree";
import MyPortfolioPageFour from "./pages/MyPortfolioPageFour";
import MyPortfolioPageFive from "./pages/MyPortfolioPageFive";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            setCurrentPage(index + 1);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="fixed right-0 flex z-50">
          <MyPortfolioSideBar1 pageNumber={currentPage} />
        </div>

        <section ref={sectionRefs[0]} className="h-full">
          <MyPortfolioPageOne />
        </section>
        <section ref={sectionRefs[1]} className="h-full">
          <MyPortfolioPageTwo />
        </section>
        <section ref={sectionRefs[2]} className="h-full">
          <MyPortfolioPageThree />
        </section>
        <section ref={sectionRefs[3]} className="h-full">
          <MyPortfolioPageFour />
        </section>
        <section ref={sectionRefs[4]} className="h-full">
          <MyPortfolioPageFive />
        </section>
      </div>
    </>
  );
};

export default App;
