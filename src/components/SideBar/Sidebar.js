import { useHistory } from 'react-router-dom';
import SidebarStyles from './sidebar-styles';

function Sidebar() {
  const {push} = useHistory();

  function onClickFunction(e){

    push(`/${e.target.id}`)
    
  }

  return (
    <SidebarStyles>
      <header>
        <div className="container">
          <h1>
            <div>I<span><a href="#secret" id="secret">'</a></span>m</div>
            <div>Brian</div>
            <div>Reisman<span>,</span></div>
          </h1>
          <p>and I <s>break</s> make things for the web<span id="point">!</span></p>
          <p id="aside">...there's a hidden link near by...</p>
          <nav onClick={onClickFunction}>
            {/* <button className={"btn"} id="projects" >Projects</button>
            <button className={"btn"} id="now" >Now</button>
            <button className={"btn"} id="contact" >Contact</button> */}
            <button className={"btn"} id="projects" onClick={onClickFunction}>Projects</button>
            <button className={"btn"} id="now" onClick={onClickFunction}>Now</button>
            <button className={"btn"} id="contact" onClick={onClickFunction}>Contact</button>
          </nav>
        </div>
      </header>
      <footer>
        <code>Built by Brian, 2020, using React. Brought to you in part by electricity.</code>
        {/* LI + GH icons? */}
      </footer>
    </SidebarStyles>
  );
}

export default Sidebar;
