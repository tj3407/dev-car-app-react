// import React from "react";

// export const UserContext = React.createContext({
//     scCode: "",
//     vehicles: [],
//     profile: {},
//     updateContext: () => {},
// })

import React, { useState } from "react";

export const UserContext = React.createContext(null);

export const UserContextProvider = props => {
//   const [state1Value, setState1Value] = useState(1);
//   const contextValue = {
//     state1Value,
//     setState1Value,
//   };
  const [userData, setUserData] = React.useState({
    scCode: '',
    vehicles: [],
    profile: {},
    updateContext
  });

  const contextValue = {
      userData,
      setUserData
  }

  function updateContext(key, value) {
    setUserData({ ...userData, [key]: value });
  }

  return (
    <UserContext.Provider value={contextValue}>{props.children}</UserContext.Provider>
  );
};
