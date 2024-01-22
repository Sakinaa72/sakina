import { useReducer } from "react";

const themeContext = React.createContext({
  theme: "light",
});

const themeReducer = (state, action) => {
  if (action.type === "TOGGLE") {
    if (state.theme === "light") {
      return { theme: "dark" };
    } else {
      return { theme: "light" };
    }
  }

  return state;
};

export const ThemeContextProvider = (props) => {
  const [theme, themeDispatch] = useReducer(themeReducer, {
    theme: "",
  });

  const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE" });
  };

  return (
    <themeContext.Provider
      value={{ theme: theme.theme, toggleTheme: toggleTheme }}
    >
      {props.children}
    </themeContext.Provider>
  );
};

export default themeContext;
