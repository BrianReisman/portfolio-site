import Header from "../Header.js/Header";
import ProjectCard from "./ProjectCard/ProjectCard.js";
import StyledProjects from "./StyledProjects";

function Projects() {
  const pageName = "Projects";

  const projectArray = [
    {
      name: "Travel Calc",
      image: "asdf",
      description:
        "This app was inspired by my desire to share with other the travel calculator I made to help plan all 6 of my 1 month+ long trips so others can enjoy the benefits of it",
      stack: "React (Class based components), Styled-Components, and Vercel",
      testing: "React Testing Library",
    },
    {
      name: "Junior JavaScript Dev Job Board",
      image: "asdf",
      description:
        "On a team of 9, over four months we built this to scratch our own itch and create something others in our shoes would also benefit from.",
      stack: "React (functional components), Recoil, Grommet.io, Heroku",
      testing: 'Jest',
    },
    {
      name: "Random Password Generator",
      image: "asdf",
      description:
      "Vanilla JavaScript and Plain ol' CSS. No frameworks, libraries, or preporcessors to see how much I could do the old fashion way.",
      stack: "Vanilla JavaScript and CSS",
      testing: 'Cypress',
    },
    {
      name: "Lambda Project",
      image: "asdf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis laudantium in dolorem quam consequuntur repellendus sed excepturi? Quia recusandae omnis iure. ",
      stack: "React, Redux, and SCSS",
    },
  ];
  //? I want to map through an array of project objects to populate the content on my project page. Do I do this map here in projects? Or in the project card component?

  return (
    <StyledProjects>
      <Header name={pageName} />
      <blockquote>
        How do you build a complex project? As simply as possible.
      </blockquote>
      <div className="cardDisplay">
        <div className="top">
          <ProjectCard projectDetails={projectArray[0]} />
          <ProjectCard projectDetails={projectArray[1]} />
        </div>
        <div className="bottom">
          <ProjectCard projectDetails={projectArray[2]} />
          <ProjectCard projectDetails={projectArray[3]} />
        </div>
      </div>
    </StyledProjects>
  );
}

export default Projects;
