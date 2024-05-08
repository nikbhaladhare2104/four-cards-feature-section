import { useState } from "react";
import Cards from "./components/Cards";
import DarkMode from "./components/DarkMode";
import Info from "./components/Info";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const body = document.body;

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    body.classList.toggle("darkMode");
  };
  return (
    <main className={darkMode ? "darkMode" : ""}>
      <DarkMode onDarkMode={handleDarkMode} />
      <Info />
      <Cards />
    </main>
  );
}

export default App;
