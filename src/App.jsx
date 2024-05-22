import React from "react";
import Header from "./components/Header";

import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <article className="text-black mx-auto lg:w-[60vw] xl:w-[40vw] px-9 py-8 min-h-screen">
        <Header />
        <hr className="my-6" />
        <Projects />
        <Skills />
        <hr className="my-6" />
        <Footer />
      </article>
    </main>
  );
}

export default App;
