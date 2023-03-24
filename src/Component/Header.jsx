import { useContext } from "react";
import { AppContext } from "../Context/ContextProvider";

function Header() {
  const context = useContext(AppContext);
  return <h2>{context.theme}</h2>;
}
export default Header;
