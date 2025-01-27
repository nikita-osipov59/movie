import { LinkHTMLAttributes } from "react";

export interface BtnLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: React.ReactNode;
  variant?: "primary" | "default";
  to: string;
}
