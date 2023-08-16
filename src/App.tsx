import React, { useEffect } from "react";
import "./App.scss";
import "./assets/scss/reset.scss";
import "./assets/scss/global.scss";
import Header from "./features/Header/Header";
import Parallax from "./features/Parallax/Parallax";
import Main from "./features/Main/Main";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Description from "./features/Description/Description";

function App() {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
  useEffect(() => {
    const onScroll: EventListener = () => {
      document.body.style.cssText += `--scrollTop: ${window.scrollY}px`;
    };
    window.addEventListener("scroll", onScroll);
    ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".content",
    });
  }, []);
  return (
    <>
      <Header />

      <div className="wrapper">
        <div className="content">
          <Parallax />
          <div className="gradient" />

          <Description />

          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
