import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface DrawerContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const DrawerContext = createContext<DrawerContextProps>({
  isOpen: true,
  setIsOpen: () => {},
});

interface DrawerContextProviderProps {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}
const DrawerContextProvider: FC<
  PropsWithChildren & DrawerContextProviderProps
> = ({ children, isOpen: status, setIsOpen: setter }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (status !== undefined) setIsOpen(status);
  }, [status]);
  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
export const useDrawerContext = () => useContext(DrawerContext);
