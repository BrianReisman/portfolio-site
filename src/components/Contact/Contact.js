import Header from "../Header.js/Header";
import ContactStyles from "./StyledContact";
import PDF from "./BrianReismanResume.pdf";
import Icons from '../Icons/Icons';

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
        <Icons/>
      </div>

      <form>
      <p className='centerText'>For anything else 👇</p>
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
          <textarea id="message" placeholder="Message goes here... those written in verse will be replied to first." />
        </label>
        <button onClick={onBtnClick}>Send it! (You Won't)</button>
      </form>

    </ContactStyles>
  );
}

export default Contact;
