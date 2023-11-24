import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Counter from "./Counter";
import Names from "./Names";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <BrowserRouter>
      <nav className="App-navigation">
        <Link to="/">Compteur</Link>
        <Link to="/names">Générateur de noms</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Counter count={count} setCount={setCount} />} />
        <Route path="/names" element={<Names />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
