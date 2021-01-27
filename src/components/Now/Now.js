import Header from "../Header.js/Header";
import Icons from "../Icons/Icons";

import NowStyles from "./StyledNow";

function Now() {
  const pageName = "Now";
  return (
    <NowStyles>
      <Header name={pageName} />
      {/* <button>short version</button>
      <button>less short</button> */}

      <div className="containerNowTop">
        <p className="icons">
          Interested in what I've done? 👉
          <div className="icons">
            <Icons />
          </div>
          . Here's what I'm <em>doing</em>. 👇
        </p>
      </div>

      <ul>
        <li>
          Finishing up my studies at a 6 month web dev and computer science
          program
        </li>
        <li>
          📘 Reading JavaScript: The Definitive Guide (currently on page 272,
          and just learned that in ES6 there is dynamic importing...?!)
        </li>
        {/* <li>Spending too much money adding to my 🍵tea tea library.</li> */}
        <li>30 hours into a 40 hours course reinforcing React</li>
        <li>
          Working on an awesome 9 person team building a job board for Jr.
          JavaScript developers
        </li>
        {/* <p>
          Thanks Derek Sivers for the idea to have this page... and start
          programming... and live life on my terms.
        </p> */}
      </ul>
      <ul>



        <p>Code is great but here are some other things I love:</p>
        <li>Theater</li>
        <li>Days off while traveling</li>
        <li>Muji Pens</li>
        <li>
          Day dreaming about when I can travel next, and fantasizing what a week
          (...or two 😀😍) would look like{" "}
          <a
            href="https://www.booking.com/hotel/ge/kazbegi-view.html"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          and{" "}
          <a
            href="https://www.alpacaexpeditions.com/inca-trail-expedition-5d4n/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </li>
        {/* <li>Reading Seth Godin's The Practice</li> */}
      </ul>
      
      {/* <blockquote>
        How do you writea a complex program? As simply as possible
      </blockquote> */}

      {/* <h2>less short</h2>
      <p>6 word answers</p>
      <p>When did you start coding? 2019: kicked tires. 2020: got serious</p>
      <p>
        Project I'm most proud of. This job board, check it <a>here</a>
      </p>
      <p>
        What are you reading now? JavaScript: The Definitive Guide +{" "}
        <a>The Practice</a>
      </p> */}
    </NowStyles>
  );
}

export default Now;

// 6 word answers
// When did you start coding? Kicked tires in 2019, got serious 2020 // 2019-kicked tires. 2020-got serious
// Project I'm most proud of. This job board, check it <a>here</a>
//  What are you reading now? JavaScript: The Definitive Guide + <a>The Practice</a>
//
//
//
//
//
//
//
