import React, { useReducer, createContext } from "react";

export const AppContext = createContext([]);

const initialState = {
    activeStep: 0,
    name: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    selfOwned: true,
    teamOwned: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STEP":
        return {
            ...state,
            activeStep: action.activeStep + 1
        };

    case "SAVE_PERSONAL_INFO":
        return {
            ...state,
            name: action.name,
            displayName: action.displayName
        };

    case "SAVE_WORKSPACE_INFO":
        return {
            ...state,
            workspaceName: action.workspaceName,
            workspaceURL: action.workspaceURL
        };

    case "SAVE_OWNERSHIP_INFO":
        return {
            ...state,
            selfOwned: action.selfOwned,
            teamOwned: action.teamOwned
        };

    default:
        return {
            ...state
        };
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
