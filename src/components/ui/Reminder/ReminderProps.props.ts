import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface ReminderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  view: "Registration" | "Login" | "Remember";
}
