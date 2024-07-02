import {
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from "react";
import DrawerContextProvider, { useDrawerContext } from "./Context";
import cn from "../../../utils/cn";

interface IRoot {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const Root: FC<PropsWithChildren & IRoot> = ({ children, isOpen }) => {
  return (
    <DrawerContextProvider isOpen={isOpen}>{children}</DrawerContextProvider>
  );
};
interface IContent extends HTMLAttributes<HTMLDivElement> {}
const Content = forwardRef<HTMLDivElement, IContent & PropsWithChildren>(
  ({ children, className }, ref) => {
    const { isOpen, setIsOpen } = useDrawerContext();

    return (
      <>
        <div
          ref={ref}
          onClick={() => setIsOpen(false)}
          className={cn(
            `right-0 fixed top-0 bottom-0`,
            isOpen ? "w-full z-20 left-0" : "hidden"
          )}
        ></div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={cn(
            `   duration-500 fixed    origin-top     top-0 bottom-0 pt-20 px-5  w-7/12 lg:w-1/3 ease-out z-40 bg-primary shadow-lg `,
            className,
            isOpen
              ? "  ltr:left-0 rtl:right-0 "
              : " rtl:-right-full ltr:-left-full "
          )}
        >
          {children}
        </div>
      </>
    );
  }
);

const Trigger = ({ children }: { children: ReactNode }) => {
  const { setIsOpen } = useDrawerContext();

  const TriggerOnClickEvent = () => {
    setIsOpen((prev) => !prev);
  };
  return <button onClick={TriggerOnClickEvent}>{children}</button>;
};

interface ICloseButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CloseButton: FC<ICloseButton> = ({ children, className }) => {
  const { setIsOpen } = useDrawerContext();
  return (
    <button
      className={cn(`absolute top-5  text-xl text-accent right-5`, className)}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </button>
  );
};
export { Root, Content, Trigger };
