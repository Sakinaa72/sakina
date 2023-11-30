import React from "react";
import Header from "./components/Header";

import styles from "./App.module.css";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="text-black mx-auto lg:w-[55vw] xl:w-[38vw] px-9 py-8 min-h-screen">
      <Header />
      <Projects />
    </main>
  );
}

export default App;
