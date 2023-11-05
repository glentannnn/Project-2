import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import NavBar from "./components/NavBar";

const Page1 = React.lazy(() => import("./pages/Page1"));
const Page2 = React.lazy(() => import("./pages/Page2"));

function App() {
  return (
    <div className="container">
      <Suspense fallback={<p>Loading...</p>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/page1" />}></Route>
          <Route path="/page1" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

/* Testing the API
function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=60");
    const resData = await res.json();
    setData(resData);
  };

  useEffect(() => {
    getData();
  }, []);

  return <>{JSON.stringify(data)}</>;
}

export default App;
*/
