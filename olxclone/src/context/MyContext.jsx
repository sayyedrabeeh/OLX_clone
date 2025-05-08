import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [logState, setLogState] = useState(false); // or any default value

  return (
    <MyContext.Provider value={{ logState, setLogState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
