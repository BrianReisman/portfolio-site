import { useHistory } from "react-router-dom";
import SidebarStyles from "./sidebar-styles";

// components
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const Sidebar = () => {
  const { push } = useHistory();

  function onClickFunction(e) {
    push(`/${e.target.id}`);
  }

  return (
    <SidebarStyles>
      <header>
        <nav onClick={onClickFunction}>
          <button className={"btn"} id="projects" onClick={onClickFunction}>
            Projects
          </button>
          <button className={"btn"} id="now" onClick={onClickFunction}>
            Now
          </button>
          <button className={"btn"} id="contact" onClick={onClickFunction}>
            Contact
          </button>
        </nav>
      </header>
      <ThemeToggle />
      <Header />
      <Nav />
      <Footer />
    </SidebarStyles>
  );
};

export default Sidebar;
