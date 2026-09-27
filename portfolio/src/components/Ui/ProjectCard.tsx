import { Project } from '../../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaExpand } from 'react-icons/fa';
import { useLanguage } from '../../Context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onExpand: () => void;
  onFlowchart: () => void;
}

const ProjectCard = ({ project, onExpand, onFlowchart }: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <div 
      onClick={onExpand}
      className="bg-medium-grey rounded-lg p-6 hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 border border-light-grey hover:border-transparent h-full flex flex-col cursor-pointer group relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
          style={{
            background: 'linear-gradient(to top, #6b1414 0%, #8b1a1a 40%, #b33a00 80%, #d45300 100%)',
          }}
      />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-light-text group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
            className="p-2 text-text-grey hover:text-white hover:bg-dark-grey/50 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 active:scale-95"
            aria-label="Expand project"
          >
            <FaExpand size={16} />
          </button>
        </div>
        
        <p className="text-text-grey text-sm mb-4 leading-relaxed grow group-hover:text-white/90 transition-colors duration-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs text-fire-orange bg-dark-grey/80 px-2 py-1 rounded border border-light-grey transition-all duration-200 group-hover:text-white group-hover:border-white/30 group-hover:bg-dark-grey/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs text-text-grey bg-dark-grey/80 px-2 py-1 rounded border border-light-grey group-hover:text-white/70 group-hover:border-white/30">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        <div className="flex gap-4 mt-auto" onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-grey hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 group-hover:text-white/80"
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-grey hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 group-hover:text-white/80"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFlowchart();
            }}
            className="ml-auto text-sm font-mono px-3 py-1 rounded transition-all duration-200 hover:scale-105 active:scale-95 group-hover:text-white group-hover:border-white/50"
            style={{
              color: '#d45300',
              border: '1px solid #d45300',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d45300';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#d45300';
            }}
          >
            {t('modal.details')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;