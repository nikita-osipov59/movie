import { LinkBtn } from "@/components/ui";

import { ReminderProps } from "./ReminderProps.props";

import { ROUTER_PATH } from "@/router/PATH";

import style from "./style.module.scss";

export const Reminder: React.FC<ReminderProps> = ({ view }) => {
  return (
    <>
      {view === "Registration" && (
        <p className={style.reminder}>
          Have an account?
          <LinkBtn to={ROUTER_PATH.AUTH} variant="default">
            Login
          </LinkBtn>
        </p>
      )}
      {view === "Login" && (
        <p className={style.reminder}>
          Dont have an account?
          <LinkBtn to={ROUTER_PATH.REGISTRATION} variant="default">
            Registration
          </LinkBtn>
        </p>
      )}
      {view === "Remember" && (
        <p className={style.reminder}>
          Remember password?
          <LinkBtn to={ROUTER_PATH.AUTH} variant="default">
            Login
          </LinkBtn>
        </p>
      )}
    </>
  );
};
