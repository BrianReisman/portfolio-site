import Header from '../Header.js/Header';

import NowStyles from './now-styled';

function Now() {
  const pageName = 'Now';
  return (
    <NowStyles>
      <Header name={pageName}>Now</Header>
      <p>If you'd like to learn about me you can do so at LinkedIn or contact me directly.</p>
      <p>This page is to let you know what I'm up to <em>now</em>.</p>
        <p>
          If you want to know what I've done,
          <a href="https://www.linkedin.com/in/brian-reisman/">LinkedIn</a> is
          the place for you.
        </p>
        <p>
          If you'd like to know what I'm doing, <em>now</em> then you're in the
          right spot!
        </p>
        <p>
          Aside from spending 55 hours a week doing my course working and projects for Lambda School where I am a studying full time in their full stack web development program I am: 
        </p>
        <ul>
          <li>📘 Reading cover to cover JavaScript: The Definitive Guide (currently on page 60, and just learned that when destructuring objects you can simultaniously give the extracted value a different variable name by using the following syntax)</li>
          <li>Working through Max's udemy course</li>
          <li>🛠 Building the same travel calc three ways using React, JavaScript, and _______. You can seem mockups <a href="#">here</a>.</li>
          <li>Spending too much money adding to my 🍵 tea library.</li>
          <li>Reading Seth Godin's The Practice</li>
          <li>Day dreaming about when I can travel next, and fantasizing what a week (...or two 😀😍) would look like <a href="#">here</a> and <a href="#">here</a>.</li>
          <p>Thanks Derek Sivers for the idea to have this page... and start programming... and live life on my terms.</p>
        </ul>
        <blockquote>
          This is a quote I like it makes me think about life.
        </blockquote>
        <ul>
          <li>I love coding</li>
          <li>I have lots of other interests too</li>
          <blockquote>How do you writea a complex program? As simply as possible</blockquote>
        </ul>




      <br/>
      <a href="/"> Go home</a>
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
