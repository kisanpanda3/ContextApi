import { useContext } from "react";
import { AppContext } from "./Context/ContextProvider";
import ToggleComponent from "./Component/ToggleComponent";
import "./styles.css";
import Header from "./Component/Header";
import Todo from "./Component/Todo";
export default function App() {
  //3. consuming
  const value = useContext(AppContext);
  //console.log(value);
  return (
    <div className="App">
      <Header />
      <ToggleComponent />
      <Todo />
    </div>
  );
}
