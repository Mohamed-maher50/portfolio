import { HTMLAttributes, forwardRef } from "react";
import cn from "../utils/cn";
// ------------------------------------------------------------------------Theme Container component
interface ITheme extends HTMLAttributes<HTMLDivElement> {}
const Theme = forwardRef<HTMLDivElement, ITheme>(
  ({ className, children, style, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          " p-3 cursor-pointer items-center flex justify-between shadow rounded-lg  ",
          className
        )}
        style={{
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
// ------------------------------------------------------------------------Theme body component
interface IThemeBody extends HTMLAttributes<HTMLDivElement> {}
export const Body = forwardRef<HTMLDivElement, IThemeBody>(
  ({ className, children }, ref) => {
    return (
      <div className={cn(`flex gap-2 w-fit`, className)} ref={ref}>
        {children}
      </div>
    );
  }
);

// ------------------------------------------------------------------------Theme title component
interface IThemeTitle extends HTMLAttributes<HTMLDivElement> {}
export const Title = forwardRef<HTMLDivElement, IThemeTitle>(
  ({ className, children }, ref) => {
    return (
      <h1 className={cn(`flex gap-2 text-lg w-fit`, className)} ref={ref}>
        {children}
      </h1>
    );
  }
);

interface ICircleColorValue extends HTMLAttributes<HTMLDivElement> {}
export const CircleColorValue = forwardRef<HTMLDivElement, ICircleColorValue>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(`h-4 w-4 rounded-full shadow-md`, className)}
        {...rest}
      ></div>
    );
  }
);

export default Theme;
