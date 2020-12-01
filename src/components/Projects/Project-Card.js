import styled from "styled-components";

const ProjCardStyles = styled.div`
  border: 1px solid gold;
  max-width: 500px;
  max-height: 40vh;
  word-wrap: break-word;
  h1{
    font-size: 3.2rem;
  }
  img{
    border-radius: 8px;
    max-width: 100%;
    height: auto;
  }
  .hidden
`;

function ProjectCard(props) {
  const { name, image, description } = props.projectDetails;
  
  return (
    <ProjCardStyles>
      <p>{name}</p>
      <p>{image}</p>
      <p>{description}</p>
      <h1>Project asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfname</h1>
      <img src="https://picsum.photos/400/150" alt="description"></img>
      <p className="hiddentext">click to see more!</p>
{/* this attempted inspired by https://www.w3schools.com/css/css3_images.asp  */}
      <p>card</p>
    </ProjCardStyles>
  );
}

export default ProjectCard;
