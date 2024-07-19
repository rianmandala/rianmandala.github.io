import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

const CounterContext = createContext({
  activeNavbar: "",
  setActiveNavbar: (val: string) => {},
});

const InfoProvider = ({ children }: PropsWithChildren) => {
  const [activeNavbar, setActiveNavbar] = useState("");

  return (
    <CounterContext.Provider value={{ activeNavbar, setActiveNavbar }}>
      {children}
    </CounterContext.Provider>
  );
};

const useInfoContext = () => useContext(CounterContext);

export { InfoProvider, useInfoContext };
