import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className="text-center font-medium mt-10 text-blue-600 mx-3">
      <h1 className={`text-4xl font-bold`}>Yasin Bhojani</h1>
      <p className="my-5">A Fullstack Developer, Tech Enthusiast and Investor.</p>
      <ul className="flex items-center justify-center gap-3 underline">
        <li><a href="https://github.com/yasinbhojani" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/yasinbhojani/" target="_blank">Linkedin</a></li>
        <li><a href="https://twitter.com/yasin_bhojani" target="_blank">X</a></li>
      </ul>
    </div>
  );
}

export default App;
