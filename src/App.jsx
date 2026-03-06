import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-transparent selection:bg-sky-500/30">
        {showSplash ? (
          <Splash onComplete={() => setShowSplash(false)} />
        ) : (
          <>
            <AnimatedBackground />
            <Navbar />
            <main>
              <Hero />
              <Experience />
              <Achievements />
              <Projects />
              <Skills />
              <Education />
              <Certifications />
              <Publications />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
