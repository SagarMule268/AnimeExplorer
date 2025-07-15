// ThemeProvider.js
import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  useEffect(()=>{
      document.body.className = theme; // Apply the theme to the body class
  },[theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;