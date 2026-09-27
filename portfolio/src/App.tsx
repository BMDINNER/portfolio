import { useEffect, useState } from 'react';
import { LanguageProvider } from './Context/LanguageContext';
import Sidebar from './components/Layout/Sidebar';
import MainContent from './components/Layout/MainContent';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects'];
      const scrollPosition = window.scrollY + 100;

      // Find which section is currently in view
      let currentSection = 'about';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
            break;
          }
        }
      }

      // If we're at the very bottom, highlight the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = 'projects';
      }

      setActiveSection(currentSection);
    };

    // Run once on mount to set initial state
    setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-grey text-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Sidebar activeSection={activeSection} />
            <MainContent />
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;