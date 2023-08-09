import { ProjectType } from "../../../models/project";
import TechItem from "../../../ui/TechItem/TechItem";
import classes from "./project.module.scss";

type Props = {
  project: ProjectType;
};

const Project = ({ project }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes["img-container"]}>
        <img src={project.imgUrl} alt={project.title} className={classes.img} />
      </div>
      <div className={classes.info}>
        <h2 className={classes.title}>{project.title}</h2>
        <h3 className={classes.subtitle}>{project.subtitle}</h3>
        <span>{project.description}</span>
        <ul className={classes.links}>
          {project.links.map((link) => (
            <li key={link.id}>
              <a href={link.url} className={classes.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <h3>Tech used</h3>
        <ul className={classes.tech}>
          {project.techs.map((item) => (
            <TechItem tech={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
