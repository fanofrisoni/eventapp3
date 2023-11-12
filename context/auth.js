import { router,useRootNavigation,useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProtectedRouter(user) {
  const segments = useSegments(user);
  const navigation = useRootNavigation();
  const isNavigationReady = navigation?.isReady;


  useEffect(() =>{
    
    const isAuthGroup = segments[0] === '(login)';

    if (
        isNavigationReady &&
        !isAuthGroup &&
        !user
      ) {
      router.replace('/loginscreen')
    } else if (
      isNavigationReady &&
      isAuthGroup &&
      user
    ) {
      router.replace('/homescreen')
    }
  }, [user, segments, navigation?.isReady]);
}

export function Provider ({children}){
  const [user, setUser] = useState(null);

  useProtectedRouter(user);

  const signIn = () => {}

  const signOut = () => {
    setUser(null);
  }

  const signUp = () => {}

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={ {setUser ,user, signIn, signOut, signUp} }>
      {children}
    </AuthContext.Provider>
  )
}