import { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../Context/LanguageContext';
import FlowchartPage from './FlowchartPage';
import { FlowchartProject } from '../../data/flowchartData';

interface FlowchartModalProps {
  project: FlowchartProject;
  isOpen: boolean;
  onClose: () => void;
}

const FlowchartModal = ({ project, isOpen, onClose }: FlowchartModalProps) => {
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

  const projectTitle = t(project.titleKey as any);

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
        <div className="sticky top-0 z-10 flex items-center justify-between p-3 bg-medium-grey/95 backdrop-blur-sm border-b border-light-grey rounded-t-xl">
          <h2 className="text-lg font-bold text-fire-orange truncate">
            {projectTitle} - {t('flowchart.title' as any)}
          </h2>
          <button
            onClick={handleClose}
            className="p-1.5 text-text-grey hover:text-fire-orange hover:bg-dark-grey rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Close modal"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="p-3">
          <FlowchartPage
            imageEn={project.imageEn}
            imageTr={project.imageTr}
            projectTitle={projectTitle}
            description={project.descriptionKey}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowchartModal;