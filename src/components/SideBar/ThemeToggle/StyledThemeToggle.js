import styled from "styled-components";

const StyledThemeToggle = styled.div`
  .toggle input {
    display: none;
  }
  .toggle {
    position: relative; /*children positioned relative label*/
    display: inline-block;
    width: 50px;
    height: 25px;
  }
  .slider {
    background-color: tomato;
    border: 2px solid tomato;
    border-radius: 50px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.4s;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .slider:before {
    content: '';
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50px;
    transition: all 0.4s;
    position: absolute;
    top: 0.5px;
    left: 2px;
  }
  input:checked + .slider:before {
    transform: translateX(21px);
    background-color: tomato;
  }
  input:checked + .slider {
    background-color: white;
  }
`;

export default StyledThemeToggle;
