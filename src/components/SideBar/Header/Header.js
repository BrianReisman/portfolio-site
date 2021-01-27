import React from "react";

const Header = () => {
  return (
    <div className="container">
      <h1>
        <div>
          I
          <span>
            <a href="#secret" id="secret">
              '
            </a>
          </span>
          m
        </div>
        <div>Brian</div>
        <div>
          Reisman<span>,</span>
        </div>
      </h1>
      <p>
        and I <s>break</s> make things for the web<span id="point">!</span>
      </p>
      {/* <p id="aside">...there's a hidden link near by...</p> */}
    </div>
  );
};

export default Header;
