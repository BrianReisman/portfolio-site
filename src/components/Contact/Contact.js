import Header from "../Header.js/Header";
import ContactStyles from "./contact-styles";

function Contact() {
  const pageName = "Contact";


  function onBtnClick(e){
    e.preventDefault();
    alert('I\'ve been touched!');
  }


  return (
    <ContactStyles>
      <Header name={pageName} />
      <br />
      <h1>This is code from the contact page</h1>
      <br />
      <a href="./BrianReisman-Resume.pdf" target="_blank" download>
        resume
      </a>

      <form>
        <label htmlFor="name">
          {"Name"}
          <input type="text" id="name" />
        </label>
        <label htmlFor="email">
          {"Email"}
          <input type="text" id="email" />
        </label>
        <label htmlFor="message">
          {"Message"}
          <input type="textarea" id="message" />
        </label>
        <button onClick={onBtnClick}>Send it! (You Won't)</button>
      </form>

      <a href="/"> Go home</a>
    </ContactStyles>
  );
}

export default Contact;
