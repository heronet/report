import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p>© 2023 Sirat. All rights reserved.</p>
        <div className={classes.power}>
          <span>Powerd by React </span>
          <img src="/icons/React.svg" alt="react-logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
