import css from "./Button.module.scss";

const Button = (props: any) => {
  return <button className={css.button} {...props}>{props.children}</button>;
};

export default Button;
