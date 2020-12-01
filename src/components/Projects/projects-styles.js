import styled from "styled-components";

const ProjectStyles = styled.div`
  max-height: 90vh;
  box-sizing: border-box;
  .cardDisplay,
  .top,
  .bottom {
    display: flex;
    /* border: 1px solid red; */
    /* margin: 1%; */
  }
  .cardDisplay {
    flex-direction: column;
  }
  .top,
  .bottom {
    justify-content: space-around;
    border: 1px solid gold;
  }
`;
export default ProjectStyles;
