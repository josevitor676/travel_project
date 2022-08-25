import { useState } from "react";
import { Link } from "react-scroll/modules";
import { Discover } from "./Components/Discover";
import { Explore } from "./Components/Explore";
import { Footer } from "./Components/Footer";
import { Information } from "./Components/Information";
import { Main } from "./Components/Main";
import { NewsLetter } from "./Components/NewsLetter";
import { GlobalStyle } from "./Styles/global";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Main/>
      <Information/>
      <Discover/>
      <Explore/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
