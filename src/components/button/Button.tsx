import classes from "./Button.module.css";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
}

export default function Button({ ...props }: ButtonProps) {
  return (
    <button
      disabled={props.disabled}
      className={`${classes.button} ${props.active && classes.active}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
