import React, {
  Children,
  Dispatch,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useState,
} from "react";
import cn from "../../../utils/cn";
interface ChildProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}
interface IToggleLangButton
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "children"> {
  children: ({ isActive }: { isActive: boolean }) => ReactNode | ReactNode;
  onChange?: (isActive: boolean) => void;
}
const Toggle = forwardRef<HTMLDivElement, IToggleLangButton>(
  ({ children, className, onChange, ...rest }, ref) => {
    const [isActive, setIsActive] = useState(false);
    const renderChildrenWithProps = (children: React.ReactNode) => {
      return Children.map(children, (child) => {
        if (isValidElement<ChildProps>(child)) {
          return cloneElement(child, { isActive, setIsActive });
        }
        return child;
      });
    };

    useEffect(() => {
      onChange && onChange(isActive);
    }, [isActive]);
    return (
      <div
        ref={ref}
        {...rest}
        onClick={() => {
          setIsActive(!isActive);
          onChange && onChange(!isActive);
        }}
        className={cn(
          `bg-accent p-1  rounded-full text-secondary transition-transform  shadow-lg cursor-pointer  min-w-14 duration-500 text-center`,
          className
        )}
      >
        {typeof children == "function"
          ? children({ isActive })
          : renderChildrenWithProps(children)}
      </div>
    );
  }
);

interface IToggleSpan extends HTMLAttributes<HTMLSpanElement> {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const ToggleSpan = forwardRef<
  HTMLDivElement,
  IToggleSpan & PropsWithChildren
>(({ children, className, isActive, setIsActive, ...rest }, ref) => {
  console.log(isActive);
  return (
    <span
      onClick={() => setIsActive(!isActive)}
      ref={ref}
      className={cn(
        `w-5 h-5 bg-primary block transition-transform rounded-full  duration-500 shadow-lg ${
          isActive ? "ml-auto" : "ml-0 bg-red-300"
        }`,
        className
      )}
      {...rest}
    ></span>
  );
});

export default Toggle;
