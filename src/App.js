import React from "react";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import NoPage from "./pages/nopage";
import Projects from "./pages/projects";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <NavBar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <p></p>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
