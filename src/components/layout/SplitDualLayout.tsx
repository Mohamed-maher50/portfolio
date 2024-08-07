import { FC, HTMLAttributes, ReactNode } from "react";

interface ISplitDual extends HTMLAttributes<HTMLDivElement> {
  children: [ReactNode, ReactNode];
}
const SplitDualLayout: FC<ISplitDual> = ({ children }) => {
  const [Right, Left] = children;
  return (
    <div className="grid md:grid-cols-2 text-center md:text-start gap-1">
      <div>{Right}</div>
      <div>{Left}</div>
    </div>
  );
};

export default SplitDualLayout;
