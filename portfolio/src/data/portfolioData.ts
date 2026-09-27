export interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  features?: string[];
  github?: string;
  demo?: string;
  videos?: VideoItem[];
  images?: string[];
  hasVideo?: boolean;
}

export interface VideoItem {
  src: string;
  descriptionKey: string;
}

export const projects: Project[] = [
  {
    title: '',
    description: '',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Docker'],
    features: [],
    github: 'https://github.com/BMDINNER/MultiPlatform-Authentication-Project',
    hasVideo: false, 
  },
  {
    title: '',
    description: '',
    technologies: ['React', 'TypeScript', 'Zod'],
    features: [],
    github: 'https://github.com/BMDINNER/LogReg',
    hasVideo: false, 
  },
  {
    title: '',
    description: '',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GROQ', '',  'axios', 'zustand'],
    features: [],
    github: 'https://github.com/BMDINNER/AI-Powered-Snippet-Manager',
    hasVideo: true,
    videos: [
      {
        src: 'videos/code-generation.mp4',
        descriptionKey: 'video.ai.create.desc',
      },
      {
        src: 'videos/code-explanation.mp4',
        descriptionKey: 'video.ai.explanation.desc',
      },
      {
        src: 'videos/code-optimization.mp4',
        descriptionKey: 'video.ai.optimize.desc',
      },
      {
        src: 'videos/snippet-filtering.mp4',
        descriptionKey: 'video.ai.filter.desc',
      },
      {
        src: 'videos/chat-help.mp4',
        descriptionKey: 'video.ai.help.desc',
      },
      {
        src: 'videos/OAuth2Login.mp4',
        descriptionKey:'video.ai.oauth2.desc'
      }
    ],
  },
  {
    title: '',
    description: '',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: [],
    github: 'https://github.com/BMDINNER/Hospital-Management-Project-UPDATED',
    hasVideo: true,
    videos: [
      {
        src: 'videos/hospital-proj.mp4',
        descriptionKey: 'video.hospital.appointment.desc',
      },
    ],
  },
];