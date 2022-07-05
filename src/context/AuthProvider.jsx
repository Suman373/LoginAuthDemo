// context api
import { createContext, useState } from "react";

// creating the empty object inside auth context
const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [auth , setAuth] = useState({});
    // children are all the components of our app
    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;