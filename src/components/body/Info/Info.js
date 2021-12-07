import React from "react";
import Separator from "../../common/separator/Separator";
import "./Info.css";

function Info() {
  return (
    <div className="about-me-container" id="about-me">
      <Separator />
      <h2>About Me</h2>
      <div className="about-me-section">
        I am a self-taught frontend developer with experience in building
        websites and web applications as part of personal projects. I am
        currently looking for an opportunity to continue developing my skills in
        the commercial environment. 
        <br />
        <br />
        I have completed numerous web courses on
        technologies like <span className='technologies'>
         HTML, CSS, JavaScript, React, Redux, Git,</span> and <span className='technologies'>Material
        UI</span>. Simultaneously, I have been gaining practical experience while
        working on personal projects which you can find on my GitHub.
        <br />
        <br />
         During my
        humanities studies, I have developed critical and logical thinking
        skills that I consider essential in the work of a programmer. I am
        problem-solving-oriented and find myself comfortable in the teamwork
        environment.
      </div>
    </div>
  );
}

export default Info;
