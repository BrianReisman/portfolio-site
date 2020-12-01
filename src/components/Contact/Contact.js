import Header from '../Header.js/Header';

function Contact() {
  const pageName = 'Contact';

  return (
    <>
      <Header name={pageName}/>
      <br/>
      <h1>This is code from the contact page</h1>
      <br/>
      <a href="./BrianReisman-Resume.pdf" target='_blank'>resume</a>



      <a href="/"> Go home</a>
    </>
  );
}

export default Contact;
