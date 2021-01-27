import { useHistory } from "react-router-dom";
import SidebarStyles from "./StyledSidebar";

// components
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const Sidebar = () => {
  // const { push } = useHistory();

  // function onClickFunction(e) {
  //   push(`/${e.target.id}`);
  // }

  return (
    <SidebarStyles>
      {/* <ThemeToggle /> */}
      <Header />
      <Nav />
      <Footer />
    </SidebarStyles>
  );
};

export default Sidebar;
