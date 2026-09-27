import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  const socials = [
    { icon: FaGithub, url: 'https://github.com/BMDINNER', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/berke-mustafa-dinner-33b3b7211/', label: 'LinkedIn' }
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label={social.label}
        >
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
              style={{
                backgroundColor: '#d45300',
              }}
          />
          <social.icon 
            size={24} 
            className="relative text-text-grey group-hover:text-fire-orange transition-colors duration-300"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;