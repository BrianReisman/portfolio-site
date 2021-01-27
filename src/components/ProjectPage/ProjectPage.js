import React, { useEffect, useState } from "react";
import { projectArray } from "../Projects/Projects";
console.log(projectArray);

const ProjectPage = () => {
  const [proj, setProj] = useState({});

  //*on render, check the pathname and trip off /projects/. Then go over the array and set state to the object whose name property matches what was found and trimmed from the URL.
  useEffect(() => {
    const thisPage = window.location.pathname.split("/projects/")[1];
    projectArray.forEach((project) => {
      if (thisPage === project.slug) {
        setProj(project);
      }
    });
  }, []);

  return <div>{proj.name}</div>;
};

export default ProjectPage;
