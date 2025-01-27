import { Link } from "react-router-dom";

import { Button } from "@/components/ui";

import { ReminderProps } from "./ReminderProps.props";

import { ROUTER_PATH } from "@/router/PATH";

import style from "./style.module.scss";

export const Reminder: React.FC<ReminderProps> = ({ onClick, view }) => {
  return (
    <>
      {view === "Registration" && (
        <>
          <Button onClick={onClick} width="100%" variant="primary">
            Registration
          </Button>
          <p className={style.reminder}>
            Have an account?
            <Link to={ROUTER_PATH.AUTH}>Login</Link>
          </p>
        </>
      )}
      {view === "Login" && (
        <>
          <Button onClick={onClick} width="100%" variant="primary">
            Login
          </Button>
          <p className={style.reminder}>
            Dont have an account?
            <Link to={ROUTER_PATH.REGISTRATION}>Registration</Link>
          </p>
        </>
      )}
    </>
  );
};
