import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  width?: string;
  variant?: "primary" | "default";
}
