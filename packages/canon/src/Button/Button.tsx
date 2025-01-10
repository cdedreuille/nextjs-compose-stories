import React from "react";
import { ButtonProps } from "./types";

export const Button = ({ children, variant = "primary" }: ButtonProps) => {
  return <button>{children}</button>;
};
