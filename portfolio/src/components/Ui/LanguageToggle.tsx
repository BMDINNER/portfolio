import { useLanguage } from '../../Context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 text-white font-mono text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-fire-orange/30 group hover: cursor-pointer"
      style={{
        background: 'linear-gradient(to top, #6b1414 0%, #8b1a1a 40%, #b33a00 80%, #d45300 100%)',
      }}
      aria-label="Toggle language"
    >
      <FaGlobe size={16} className="group-hover:scale-110 transition-transform" />
      <span className="font-bold">{language === 'en' ? 'EN' : 'TR'}</span>
    </button>
  );
};

export default LanguageToggle;