import StyledProjectCard from "./StyledProjectCard";

function ProjectCard(props) {
  const { name, image, description, stack, testing } = props.projectDetails;
//use image for the src attribute value.

  return (
    <StyledProjectCard>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src="https://picsum.photos/400/150" alt="description"></img>
      {/* this attempted inspired by https://www.w3schools.com/css/css3_images.asp  */}
      <p>Stack: <code>{stack}</code>. Testing: <code>{testing}</code></p>
    </StyledProjectCard>
  );
}

export default ProjectCard;
