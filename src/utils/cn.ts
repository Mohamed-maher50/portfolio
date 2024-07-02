import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: clsx.ClassValue[]) => {
  return twMerge(clsx(inputs));
};
export default cn;
