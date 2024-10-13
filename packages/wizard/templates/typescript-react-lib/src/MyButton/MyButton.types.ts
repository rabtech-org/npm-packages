import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IMyButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
