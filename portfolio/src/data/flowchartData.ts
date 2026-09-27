export interface FlowchartProject {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageEn: string;
  imageTr: string;
}

export const flowchartProjects: FlowchartProject[] = [
  {
    id: 'auth',
    titleKey: 'project.auth',
    descriptionKey: 'flowchart.auth.desc',
    imageEn: 'flowchart/auth-service-eng.png',
    imageTr: 'flowchart/auth-service-tr.png',
  },
  {
    id: 'logreg',
    titleKey: 'project.logreg',
    descriptionKey: 'flowchart.logreg.desc',
    imageEn: 'flowchart/logreg-eng.png',
    imageTr: 'flowchart/logreg-tr.png',
  },
  {
    id: 'ai',
    titleKey: 'project.ai',
    descriptionKey: 'flowchart.ai.desc',
    imageEn: 'flowchart/snippet-eng.png',
    imageTr: 'flowchart/snippet-tr.png',
  },
  {
    id: 'hospital',
    titleKey: 'project.hospital',
    descriptionKey: 'flowchart.hospital.desc',
    imageEn: 'flowchart/hospital-eng.png',
    imageTr: 'flowchart/hospital-tr.png',
  },
];