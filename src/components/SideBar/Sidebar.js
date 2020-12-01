import { useHistory } from 'react-router-dom';
import SidebarStyles from './sidebar-styles';


function Sidebar() {
  const {push} = useHistory();

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
            <button className="btn" onClick={()=>{push('/projects')}}><code className='btn-text'>Projects</code></button>
            <button className="btn" onClick={()=>{push('/now')}}><code className='btn-text'>Now</code></button>
            <button className="btn" onClick={()=>{push('/contact')}}><code className='btn-text'>Contact</code></button>
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
