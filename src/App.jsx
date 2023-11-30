import React from "react";
import Header from "./components/Header";

import styles from "./App.module.css";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="text-black mx-auto w-[38vw]">
      <Header />
      <Projects />
    </main>
  );
}

export default App;
