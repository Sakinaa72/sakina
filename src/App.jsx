import React from "react";
import styles from "./App.module.css";

const links = [
  {
    name: "Github",
    link: "https://github.com/yasinbhojani",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/yasinbhojani/",
  },
  {
    name: "X",
    link: "https://twitter.com/yasin_bhojani",
  },
];

function App() {
  return (
    <main>
      <img
        src="/jwst.jpg"
        alt="The Enduring Stellar Lifecycle in 30 Doradus (Composite: Infrared + X-ray) by JWST"
        className="h-64 w-full object-cover"
      />
      <div className="text-center font-medium mt-10 text-blue-600 mx-5">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 w-fit mx-auto">
          Yasin B.
        </h1>
        <p className="my-5">
          A full-stack developer, tech enthusiast, and investor.
        </p>
        <ul className="flex items-center justify-center gap-3">
          {links.map((link, index) => (
            <React.Fragment key={link.name}>
              <li>
                <a href={link.link} target="_blank">
                  {link.name}
                </a>
              </li>
              {index !== links.length - 1 && "•"}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
