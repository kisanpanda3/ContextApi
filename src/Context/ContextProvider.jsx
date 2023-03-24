import React, { useState } from "react";
//1. create context
// named export using {} bracket in REACT

export const AppContext = React.createContext();
const { Provider } = AppContext;
//custom component
export default function AppContextProviderComponent(props) {
  // state management
  const [theme, setTheme] = useState("dark");
  // function to update
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return <Provider value={{ theme, toggleTheme }}>{props.children}</Provider>;
}
