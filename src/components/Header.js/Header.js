import HeaderStyles from "./header-styled";
import { useHistory } from "react-router-dom";
import ThemeToggle from "../SideBar/ThemeToggle/ThemeToggle";

function Header(props) {
  const { push } = useHistory();

  function onBackClick(e) {
    console.log("back button clicked");
    push("/");
  }

  return (
    <HeaderStyles>
      <div className="container">
        <div className="back" onClick={onBackClick}>back</div>
        <h1>{props.name}</h1>
        {/* <ThemeToggle/> */}
      </div>
    </HeaderStyles>
  );
}
export default Header;
