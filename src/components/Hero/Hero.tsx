import classes from "./hero.module.scss";

const socials = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/siratul-islam/",
    title: "LinkedIn",
  },
  { id: 2, url: "https://github.com/heronet/", title: "Github" },
  { id: 3, url: "https://www.facebook.com/senorsirat/", title: "Facebook" },
];
const Hero = () => {
  return (
    <div id="hero" className={classes.container}>
      <div className={classes.intro}>
        <div className={classes.text}>
          <div className={classes.title}>
            <span className={classes.name}> I'm Sirat</span>, <br />
            <span>A Software Developer.</span>
          </div>
          <div className={classes.desc}>
            I develop Mobile and Full-stack Web applications. I love to make my
            ideas come to life using modern technologies.
          </div>
          <span></span>
          <a href="/resume.pdf" className={classes.resume}>
            My Resume
          </a>
        </div>
        <div className={classes.details}>
          <img src="/me.jpeg" alt="me" className={classes.img} />
          <ul className={classes.social}>
            {socials.map((each) => (
              <li key={each.id} className={classes.item}>
                <img
                  src={`${each.title}.svg`}
                  alt={each.title}
                  className={classes.icon}
                />
                <a href={each.url}>{each.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
