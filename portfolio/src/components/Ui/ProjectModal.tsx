import { useEffect, useRef, useState } from 'react';
import { Project } from '../../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../Context/LanguageContext';
import VideoPage from './VideoPage';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setIsMounted(false);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const mediaItems: { type: 'video' | 'image'; src: string; descriptionKey?: string }[] = [];
  
  if (project.hasVideo && project.videos && project.videos.length > 0) {
    project.videos.forEach((video) => {
      mediaItems.push({
        type: 'video',
        src: video.src,
        descriptionKey: video.descriptionKey,
      });
    });
  }
  
  if (project.images && project.images.length > 0) {
    project.images.forEach((image) => {
      mediaItems.push({
        type: 'image',
        src: image,
      });
    });
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
        isClosing || !isMounted ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-medium-grey rounded-xl w-full max-w-7xl max-h-[90vh] overflow-y-auto border border-light-grey shadow-2xl transition-all duration-300 ease-out ${
          isClosing || !isMounted 
            ? 'opacity-0 scale-95 translate-y-8' 
            : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-medium-grey/95 backdrop-blur-sm border-b border-light-grey rounded-t-xl">
          <h2 className="text-xl font-bold text-fire-orange truncate">
            {project.title}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 text-text-grey hover:text-fire-orange hover:bg-dark-grey rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Close modal"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {mediaItems.length > 0 && (
            <VideoPage
              mediaItems={mediaItems}
              projectTitle={project.title}
            />
          )}

          {mediaItems.length === 0 && (
            <div className="rounded-lg overflow-hidden border border-light-grey bg-dark-grey p-8 text-center">
              <p className="text-text-grey text-sm">{t('modal.noMedia')}</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <h3 className="text-sm font-semibold text-light-text mb-1.5">
                {t('modal.description')}
              </h3>
              <p className="text-text-grey text-sm leading-relaxed line-clamp-4">
                {project.fullDescription || project.description}
              </p>
            </div>

            <div>
              {project.features && project.features.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-sm font-semibold text-light-text mb-1.5">
                    {t('modal.features')}
                  </h3>
                  <ul className="grid grid-cols-1 gap-0.5">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="text-text-grey text-xs flex items-start transition-all duration-200 hover:text-light-text hover:translate-x-1"
                      >
                        <span className="text-fire-orange mr-1.5">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-sm font-semibold text-light-text mb-1.5">
                  {t('modal.technologies')}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-fire-orange bg-dark-grey px-2 py-1 rounded border border-light-grey"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-xs text-text-grey bg-dark-grey px-2 py-1 rounded border border-light-grey">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-3 border-t border-light-grey">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-grey hover:text-fire-orange transition-all duration-200 hover:translate-x-0.5"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-grey hover:text-fire-orange transition-all duration-200 hover:translate-x-0.5"
              >
                <FaExternalLinkAlt size={14} />
                <span>{t('modal.liveDemo')}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;