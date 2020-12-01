import { useHistory, NavLink } from 'react-router-dom';
import SidebarStyles from './sidebar-styles';

function Sidebar() {
  const {push} = useHistory();

  function onClickFunction(e){
    push(`/${e.target.id}`)
    console.log(e.target
      )

  }

  return (
    <SidebarStyles>
      <header>
        {/* <!--formerly I'm class--> */}
        <div className="container">
          <h1>
            <div>I<span><a href="#secret" id="secret">'</a></span>m</div>
            <div>Brian</div>
            <div>Reisman<span>,</span></div>
          </h1>
          <p>and I <s>break</s> make things for the web<span id="point">!</span></p>
          <p id="aside">...there's a hidden link near by...</p>
          <nav>
          <NavLink to='/projects' activeClassName='active'>
            <button className="btn" id="projects" onClick={onClickFunction}><code className='btn-text'>Projects</code></button>
            </NavLink>
          <NavLink to='/now' activeClassName='active'>
            <button className="btn" id="now" onClick={onClickFunction}><code className='btn-text'>Now</code></button>
            </NavLink>
          <NavLink to='/contact' activeClassName='active'>
            <button className="btn" id="contact" onClick={onClickFunction}><code className='btn-text'>Contact</code></button>
            </NavLink>
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

//TODO Took href='/' out of the Projects component tag and tried onclick Push with useHistory()

export default Sidebar;
