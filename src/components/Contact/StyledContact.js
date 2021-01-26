import styled from "styled-components";

const ContactStyles = styled.div`
  * {
    /* border: 0.5px dotted purple; */
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label,
  button {
    display: block;
    margin: 5px 5px 5px 5px;
    font-size: 2.4rem;
  }
  button {
    background-color: tomato;
    border-radius: 0 20px 20px 0;
    outline: none;
  }
  input {
    width: 400px;
    font-size: 1.6rem;
  }
  textarea {
    height: 200px;
    width: 650px;
    font-size: 2rem;
  }
  h3 {
    position: relative;
    right: 150px;
    text-align: right;
  }
  img {
    width: 25px;
    margin: 0 5px 0 5px;
    /* position: relative;
    right: 150px; */
  }
  .linklogos {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid pink; */
  }
  .centerText {
    text-align: center;
    margin: 10px 0 10px 0;
    font-size: 1.4rem;
  }
`;

export default ContactStyles;
