import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB"
  },
  {
    skill: "Ruby on Rails",
    level: "intermediate",
    color: "orange"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="Dennis John Brown Jr." />;
}

function Intro() {
  return (
    <div>
      <h1>Dennis John Brown Jr.</h1>
      <p>
      I'm Dennis, a Tokyo-based Full Stack Web Developer passionate about creating dynamic and user-centric web applications. As a graduate of the Le Wagon web developer bootcamp, I've recently honed my skills in JavaScript and Ruby on Rails and am eager to take on new challenges in web development.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
