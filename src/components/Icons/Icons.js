import React from "react";
import GitHubLogo from "../../digitalAssets/GitHub-Mark-32px.png";
import LinkedInLogo from "../../digitalAssets/LI-In-Bug.png";

const Icons = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/brian-reisman/"
        class="linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkedInLogo} alt="Linked In logo" />
      </a>
      <a
        href="https://github.com/BrianReisman"
        class="github"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GitHubLogo} alt="Github logo" />
      </a>
    </div>
  );
};

export default Icons;
