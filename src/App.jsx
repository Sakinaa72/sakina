import React from "react";
import Header from "./components/Header";

import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <main className="bg-slate-950">
      <article className="text-black mx-auto lg:w-[60vw] xl:w-[40vw] px-9 py-8 min-h-screen">
        <Header />
        <Projects />
        <Skills />
      </article>
    </main>
  );
}

export default App;
