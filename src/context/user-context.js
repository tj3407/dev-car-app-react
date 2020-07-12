import React from "react";

export const UserContext = React.createContext({
    scCode: "",
    vehicles: [],
    updateContext: () => {},
})