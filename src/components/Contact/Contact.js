import Header from "../Header.js/Header";
import ContactStyles from "./StyledContact";
import PDF from "./BrianReismanResume.pdf";
import GitHubLogo from "../../digitalAssets/GitHub-Mark-32px.png";
import LinkedInLogo from "../../digitalAssets/LI-In-Bug.png";

function Contact() {
  const pageName = "Contact";

  function onBtnClick(e) {
    e.preventDefault();
    alert("I've been touched!");
  }

  return (
    <ContactStyles>
      {/*//* Can this header be put at the top level for rounting? */}
      <Header name={pageName} />
      <p className='centerText'>Looking for a <a href={PDF} target="_blank" rel="noreferrer">resume</a>?</p>
      <div className="linklogos">
        <p className='centerText'>More digital proof I exist?</p>
        <a
          href="https://www.linkedin.com/in/brian-reisman/"
          class="linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedInLogo} alt="Linked In logo" />
        </a>
        <a
          href="https://github.com/BrianReisman"
          class="github"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHubLogo} alt="Github logo" />
        </a>
      </div>

      <form>
        <label htmlFor="name">
          {/* {"Name"} */}
          <input type="text" id="name" placeholder="name" />
        </label>
        <label htmlFor="email">
          {/* {"Email"} */}
          <input type="text" id="email" placeholder="email" />
        </label>
        <label htmlFor="message">
          {/* {"Message"} */}
          {/* <input type="textarea" id="message" /> */}
          <textarea id="message" placeholder="test" />
        </label>
        <button onClick={onBtnClick}>Send it! (You Won't)</button>
      </form>

    </ContactStyles>
  );
}

export default Contact;
