import React, { Children, createContext } from 'react'
import { View,Text,StyleSheet } from 'react-native'

interface ThemeContextProps{
    theme:any //TODO:
    setDarkTheme:() => void;
    setLightTheme:() => void;
}

export const ThemeContext = createContext({}as ThemeContextProps) 

export const ThemeProvider = ({children}:any) => {
    const theme = {};
    const setDarkTheme = () =>{
        console.log("set dark theme");
        
    }
    const setLightTheme = () =>{
        console.log("set light theme");
        
    }
    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme

        }}>
            {children}
        </ThemeContext.Provider>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default ThemeContext;
