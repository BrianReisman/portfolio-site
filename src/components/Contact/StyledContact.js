import styled from 'styled-components';

const ContactStyles = styled.div`
  *{
  /* border: 0.5px dotted purple; */
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label, button{
    display: block;
    margin: 5px 5px 5px 5px;
    font-size: 2rem;
  }
  button{
    background-color: tomato;
    border-radius: 0 20px 20px 0;
    outline: none;
  }
  input{
    width: 300px;
  }
  textarea{
    height: 100px;
    width: 500px;
  }
  h3{
    position: relative;
    right: 150px;
    text-align: right;
  }
  img{
    width: 25px;
    margin: 0 5px 0 5px;
    /* position: relative;
    right: 150px; */
  }
.linklogos{
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid pink; */
}
.centerText{
  text-align:center;
  margin: 10px 0 10px 0;
}

`

export default ContactStyles;