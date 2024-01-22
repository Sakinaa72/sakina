import React from "react";
import Header from "./components/Header";

import styles from "./App.module.css";
import Projects from "./components/Projects";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  return (
    <main className="dark:bg-gray-950">
      <article className="text-black mx-auto lg:w-[60vw] xl:w-[40vw] px-9 py-8 min-h-screen">
        <Header />
        <Projects />
        {/* <ThemeToggler /> */}
      </article>
    </main>
  );
}

export default App;
