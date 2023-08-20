import React, { createContext } from 'react'

const AppContext = createContext();

const AppProvider = ({children}) => {
    //children is nothing but our APP component
    const userData = {
        name:"sam",
        age:22,
    };

  return <AppContext.provider value={userData}>{children}</AppContext.provider>
}

export default {AppContext,AppProvider}
