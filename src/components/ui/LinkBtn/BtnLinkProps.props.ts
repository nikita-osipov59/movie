import { LinkHTMLAttributes } from "react";

export interface BtnLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: React.ReactNode;
  to: string;
}
