import StyledProjectCard from "./StyledProjectCard";
import {Link} from 'react-router-dom';

function ProjectCard(props) {
  const { name, image, description, stack, testing } = props.projectDetails;
//use image for the src attribute value.

  return (
    <StyledProjectCard>
      <img src="https://picsum.photos/500/150" alt="description"></img>
      {/* this attempted inspired by https://www.w3schools.com/css/css3_images.asp  */}
      <Link to='/'><h1>{name}</h1></Link>
      <p>{description}</p>
      <p>Stack: <code>{stack}</code>. Testing: <code>{testing}</code></p>
    </StyledProjectCard>
  );
}

export default ProjectCard;
