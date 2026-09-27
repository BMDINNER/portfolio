import { useState, useEffect } from 'react';
import { projects } from '../../data/portfolioData';
import { flowchartProjects } from '../../data/flowchartData';
import { useLanguage } from '../../Context/LanguageContext';
import ProjectCard from '../Ui/ProjectCard';
import ProjectModal from '../Ui/ProjectModal';
import FlowchartModal from '../Ui/FlowchartModal';

const Projects = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedFlowchart, setSelectedFlowchart] = useState<string | null>(null);
  const [translatedProjects, setTranslatedProjects] = useState(projects);

  useEffect(() => {
    const projectKeys = ['auth', 'logreg', 'ai', 'hospital'];
    const updated = projects.map((project, index) => {
      const key = projectKeys[index] || 'auth';
      
      const features = Array.from({ length: 5 }, (_, i) => 
        t(`project.${key}.features.${i}` as any)
      );
      
      return {
        ...project,
        title: t(`project.${key}` as any),
        description: t(`project.${key}.desc` as any),
        fullDescription: t(`project.${key}.full` as any),
        features: features,
      };
    });
    setTranslatedProjects(updated);
  }, [language, t]);

  const handleOpenModal = (index: number) => {
    setSelectedProject(index);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleOpenFlowchart = (projectId: string) => {
    setSelectedFlowchart(projectId);
  };

  const handleCloseFlowchart = () => {
    setSelectedFlowchart(null);
  };

  const projectIds = ['auth', 'logreg', 'ai', 'hospital'];

  return (
    <section id="projects" className="py-12">
      <h2 className="section-heading">{t('projects.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {translatedProjects.map((project, index) => {
          const projectId = projectIds[index] || 'auth';
          return (
            <ProjectCard
              key={index}
              project={project}
              onExpand={() => handleOpenModal(index)}
              onFlowchart={() => handleOpenFlowchart(projectId)}
            />
          );
        })}
      </div>

      {selectedProject !== null && (
        <ProjectModal
          project={translatedProjects[selectedProject]}
          isOpen={true}
          onClose={handleCloseModal}
        />
      )}

      {selectedFlowchart !== null && (
        <FlowchartModal
          project={flowchartProjects.find(p => p.id === selectedFlowchart)!}
          isOpen={true}
          onClose={handleCloseFlowchart}
        />
      )}
    </section>
  );
};

export default Projects;