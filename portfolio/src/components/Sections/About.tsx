import { useLanguage } from '../../Context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const technologies = [
    'React', 'TypeScript', 'Tailwind CSS', 
    'Node.js', 'Git', 'PostgreSQL', 'MongoDB', 'Docker', 'Ollama LLM(for local dev/local geliştirme için)', 'GROQ(for production dev/canlı proje geliştirme için)'
  ];

  return (
    <section id="about" className="py-12">
      <h2 className="section-heading">{t('about.title')}</h2>
      <div className="space-y-4 text-text-grey text-base leading-relaxed">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.techs')}</p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-none mt-4">
          {technologies.map((tech) => (
            <li key={tech} className="text-sm text-text-grey flex items-center group">
              <span className="text-fire-orange mr-2 transition-colors">▹</span>
              <span className="group-hover:text-fire-orange transition-colors">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;