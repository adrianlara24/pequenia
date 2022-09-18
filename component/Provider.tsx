import { useState, createContext } from "react";

const Provider = ({ children }: any) => {
  const [state, setState] = useState(null as any);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
export const AppContext = createContext(null as any);
