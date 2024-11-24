import React from "react";
import "./MainPage.css";
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import Projects from "./Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";

function MainPage() {
  return (
    <React.Fragment>
      <Header />
      <div className="mainpage">
        <Introduction />
        <Introduction />
        <Introduction />
        <Projects />
        <AboutMe />
      </div>
    </React.Fragment>
  );
}

export default MainPage;
