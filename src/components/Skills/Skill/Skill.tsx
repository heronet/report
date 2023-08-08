import classes from "./skill.module.scss";

type Props = {
  category: string;
  items: { id: number; title: string }[];
};

const Skill = (props: Props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.name}>{props.category}</h2>
      <ul className={classes.list}>
        {props.items.map((skill) => (
          <li key={skill.id} className={classes.item}>
            <img
              src={`${skill.title}.svg`}
              alt={skill.title}
              className={classes.img}
            />
            <span className={classes.title}>{skill.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
