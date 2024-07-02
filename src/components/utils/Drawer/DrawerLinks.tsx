import {
  Children,
  HTMLAttributes,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { useDrawerContext } from "./Context";
interface ChildProps extends HTMLAttributes<HTMLDivElement> {}
const DrawerLinks = ({ children }: { children: ReactNode }) => {
  const { setIsOpen } = useDrawerContext();
  const renderChildrenWithProps = (children: React.ReactNode) => {
    return Children.map(children, (child) => {
      if (isValidElement<ChildProps>(child)) {
        return cloneElement(child, { onClick: () => setIsOpen(false) });
      }
      return child;
    });
  };
  return <>{renderChildrenWithProps(children)}</>;
};

export default DrawerLinks;
