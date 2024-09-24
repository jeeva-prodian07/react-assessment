import { useState } from "react";
import { Data } from "./data";

import "./App.css";
import Cards from "./Components/Cards";

function App() {
  const [data, setData] = useState(Data);
  console.log(data);
  return (
    <>
      <Cards card={data} />
    </>
  );
}

export default App;
