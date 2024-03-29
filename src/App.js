
import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";


function App() {
  
  const [theme, setTheme] = useState(null);

  useEffect(() =>{
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }else {
      setTheme('light');
    }
    },[]);

    const handleThemeChange = () =>{
          setTheme (theme === 'dark' ? 'light' : 'dark');
        }
    
    useEffect(() =>{
      if(theme === 'dark') {
        document.documentElement.classList.add('dark');
      }else {
        document.documentElement.classList.remove('dark');
      }
    },[theme]);

    
  return (
    <>
      <div className={`bg:white dark:bg-black text-black dark:text-white bg-opacity-50`}>
        <NavBar darkMode={theme === 'dark'} handleThemeChange={handleThemeChange}/>
        <Home />
        <About/>
        <Portfolio />
        <Experience />
        <SocialLinks/>
        <Contact/>
      </div>
    </>
    
  );
}

export default App;
