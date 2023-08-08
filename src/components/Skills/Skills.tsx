import Skill from "./Skill/Skill";
import classes from "./skills.module.scss";

const skills = {
  Frontend: [
    { id: 1, title: "Angular" },
    { id: 2, title: "React" },
    { id: 3, title: "NextJS" },
    { id: 4, title: "ViteJS" },
    { id: 5, title: "TypeScript" },
    { id: 6, title: "Tailwind" },
    { id: 7, title: "Bootstrap" },
    { id: 8, title: "SASS" },
  ],
  Backend: [
    { id: 1, title: "ASP.NET Core" },
    { id: 2, title: "C Sharp" },
    { id: 3, title: "PostgreSQL" },
    { id: 4, title: "SQL" },
    { id: 5, title: "NodeJS" },
    { id: 6, title: "ExpressJS" },
    { id: 7, title: "MongoDB" },
  ],
  Tools: [
    { id: 1, title: "Linux" },
    { id: 2, title: "Docker" },
    { id: 3, title: "Google Cloud" },
    { id: 4, title: "Microsoft Azure" },
    { id: 5, title: "CI-CD" },
    { id: 6, title: "Git" },
    { id: 7, title: "Bash" },
  ],
};

const Skills = () => {
  return (
    <div className={classes.container} id="skills">
      <div className={classes.content}>
        <h1>Skills</h1>
        <span>
          Throughout the years, I have diligently honed my expertise by
          acquiring a wealth of knowledge and skills across a diverse spectrum
          of programming languages and cutting-edge tools. Allow me to share
          just a glimpse of the remarkable arsenal I have cultivated.
        </span>
        <div className={classes.skills}>
          {Object.entries(skills).map(([key, val]) => (
            <Skill category={key} items={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
