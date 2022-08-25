import { Discover } from "./Components/Discover";
import { Explore } from "./Components/Explore";
import { Information } from "./Components/Information";
import { Main } from "./Components/Main";
import { GlobalStyle } from "./Styles/global";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Main/>
      <Information/>
      <Discover/>
      <Explore/>
    </>
  );
}

export default App;
