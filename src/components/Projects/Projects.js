import Header from "../Header.js/Header";
import ProjectCard from "./Project-Card.js";
import ProjectStyles from "./projects-styles";

function Projects() {
  const pageName = "Projects";

  const projectArray = [
    { name: "project1", image: "asdf", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi possimus vel necessitatibus omnis, quae sit explicabo quod voluptate, sunt commodi temporibus illum iure voluptatibus. Illo, tenetur amet praesentium molestiae blanditiis mollitia architecto tempore eum. " },
    { name: "project2", image: "asdf", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem dignissimos cumque ipsa sit. " },
    { name: "project3", image: "asdf", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nobis fugiat! Nulla deleniti ex omnis at sapiente architecto illo delectus, nisi suscipit sequi magnam harum autem quia similique labore consectetur tenetur beatae? Dolore est quod odio praesenit. Ipsa, omnis a reiciendis maiores, amet error laudantium tempore doloribus hic enim dolor consequatur obcaecati recusandae repudiandae est et iste, vero perferendis. Deleniti, voluptas porro! " },
    { name: "project4", image: "asdf", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis laudantium in dolorem quam consequuntur repellendus sed excepturi? Quia recusandae omnis iure. " },
  ];
  //? I want to map through an array of project objects to populate the content on my project page. Do I do this map here in projects? Or in the project card component?

  return (
    <ProjectStyles>
      <Header name={pageName} />
      <p>How do you build a complex project? As simple as possible.</p>
      <div className="cardDisplay">
        <div className="top">
          <ProjectCard projectDetails={projectArray[0]}/>
          <ProjectCard projectDetails={projectArray[1]}/>
        </div>
        <div className="bottom">
          <ProjectCard projectDetails={projectArray[2]}/>
          <ProjectCard projectDetails={projectArray[3]}/>
        </div>
      </div>
      <a href="/"> Go home</a>
    </ProjectStyles>
  );
}

export default Projects;
