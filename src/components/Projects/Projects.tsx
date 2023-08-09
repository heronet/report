import { ProjectType } from "../../models/project";
import Project from "./Project/Project";
import classes from "./projects.module.scss";

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Connect",
    techs: [
      { id: 1, title: "Angular" },
      { id: 2, title: "ASP.NET Core" },
      { id: 3, title: "PostgreSQL" },
      { id: 4, title: "TypeScript" },
      { id: 5, title: "C Sharp" },
      { id: 6, title: "SASS" },
      { id: 7, title: "Docker" },
      { id: 8, title: "Google Cloud" },
    ],
    imgUrl: "/imgs/connect.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta et ratione porro corrupti accusantium eaque harum eius, qui totam beatae molestias delectus cupiditate aperiam ullam quod saepe magnam eum.",
  },
  {
    id: 2,
    title: "Sellnet",
    techs: [
      { id: 1, title: "Angular" },
      { id: 2, title: "ASP.NET Core" },
      { id: 3, title: "PostgreSQL" },
      { id: 4, title: "TypeScript" },
      { id: 5, title: "C Sharp" },
      { id: 6, title: "SASS" },
      { id: 7, title: "Docker" },
      { id: 8, title: "Google Cloud" },
    ],
    imgUrl: "/imgs/sellnet.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta et ratione porro corrupti accusantium eaque harum eius, qui totam beatae molestias delectus cupiditate aperiam ullam quod saepe magnam eum.",
  },
  {
    id: 3,
    title: "MCQ",
    techs: [
      { id: 1, title: "Angular" },
      { id: 2, title: "ASP.NET Core" },
      { id: 3, title: "PostgreSQL" },
      { id: 4, title: "TypeScript" },
      { id: 5, title: "C Sharp" },
      { id: 6, title: "SASS" },
      { id: 7, title: "Docker" },
      { id: 8, title: "Google Cloud" },
    ],
    imgUrl: "/imgs/mcq.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta et ratione porro corrupti accusantium eaque harum eius, qui totam beatae molestias delectus cupiditate aperiam ullam quod saepe magnam eum.",
  },
];
const Projects = () => {
  return (
    <div className={classes.container} id="projects">
      <div className={classes.content}>
        <h1>Works</h1>
        <div className={classes.projects}>
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
