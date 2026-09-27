import About from '../Sections/About';
import Projects from '../Sections/Projects';

const MainContent = () => {
  return (
    <main className="lg:col-span-9">
      <About />
      <Projects />
    </main>
  );
};

export default MainContent;