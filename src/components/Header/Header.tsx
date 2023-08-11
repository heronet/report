import MenuButton from "../../ui/MenuButton";
import classes from "./header.module.scss";

const links = [
  { id: 1, title: "Skills", url: "#skills" },
  { id: 2, title: "Projects", url: "#projects" },
  { id: 3, title: "About", url: "#about" },
];

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes["links-container"]}>
        <a href="#" className={classes.brand}>
          Heronet<span className={classes.xyz}>.xyz</span>
        </a>
        {/* For big screens */}
        <ul className={classes.links}>
          {links.map((link) => (
            <li key={link.id} className={classes.link}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
          <li className={classes.menu}>
            <MenuButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
