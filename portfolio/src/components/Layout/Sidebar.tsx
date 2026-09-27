import SocialLinks from '../Ui/SocialLinks';
import { useLanguage } from '../../Context/LanguageContext';
import LanguageToggle from '../Ui/LanguageToggle';

interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const { t } = useLanguage();
  
  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
  ];

  return (
    <aside className="lg:col-span-3">
      <div className="lg:sticky lg:top-12">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto lg:mx-0 p-1" 
                style={{
                backgroundColor: '#d45300',
                }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-dark-grey">
              <img 
                src={`${import.meta.env.BASE_URL}profile.jpg`} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center lg:text-left text-fire-orange">
            BERKE MUSTAFA DİNNER
          </h1>
          
          <p className="font-mono text-lg mt-2 text-center lg:text-left text-fire-orange">
            Full-Stack Developer
          </p>
        </div>

        <nav className="block">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`flex items-center group transition-colors ${
                      isActive ? 'text-fire-orange' : 'text-text-grey hover:text-fire-orange'
                    }`}
                  >
                    <span className={`font-mono text-xs mr-4 transition-colors ${
                      isActive ? 'text-fire-orange' : 'text-text-grey group-hover:text-fire-orange'
                    }`}>
                      0{navItems.indexOf(item) + 1}.
                    </span>
                    <span className="text-sm font-medium transition-colors">
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-6 flex justify-center lg:justify-start">
          <LanguageToggle />
        </div>

        <div className="mt-4 flex justify-center lg:justify-start">
          <SocialLinks />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;