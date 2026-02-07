
import React,{useState} from "react";
function ThemeToggle(){
  const [theme,setTheme]=useState("light");
  const ThemeToggle =()=>{
  setTheme(theme === "light"?"dark":"light")
  };
  const containerStyle={
    minHeight:"100vh",
    padding:"20px",
    backgroundColor: theme === "light" ? "#222" : "#fff",
    color:theme === "dark"?"#030303":"#ffff"
  }
  return(
    <div  style={containerStyle}>
      <h1>THEME TOGGLE EXAMPLE</h1>
      <p>click the button to switch between light and dark mode </p>
      <button onClick={ThemeToggle}>switch to {theme === "light"?"dark":"light"}mode</button>
      <div > <p>text color also changes according to the selected theme</p></div>
      
    </div>
  )
}
export default ThemeToggle;
