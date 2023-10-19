import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="Dennis" />;
}

function Intro (){
  return (
    <div>
      <h1>Dennis John Brown Jr.</h1>
      <p>I'm Dennis, a Tokyo-based Full Stack Web Developer passionate about creating dynamic and user-centric web applications. As a graduate of the Le Wagon web developer bootcamp, I've recently honed my skills in JavaScript and Ruby on Rails and am eager to take on new challenges in web development.</p>
    </div>
  )
}

function SkillList(){
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="⚛" color="orangered"/>
      <Skill skill="JavaScript" emoji="🔋" color="yellow" />
      <Skill skill="HTML" emoji="📕" color="skyblue" />
      <Skill skill="CSS" emoji="❤️‍🔥" color="pink" />
      <Skill skill="Ruby on Rails" emoji="💎" color="red" />

    </div>
  )
}

function Skill(props){
  return <div className="skill" style={{backgroundColor: props.color}}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>

    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
