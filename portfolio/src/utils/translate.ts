import { TranslationKey } from '../data/translations';

export type ProjectKey = 'auth' | 'logreg' | 'ai' | 'hospital';

// Helper function for project translations
export const getProjectTranslation = (
  key: ProjectKey,
  t: (key: TranslationKey) => string
) => {
  return {
    title: t(`project.${key}` as TranslationKey),
    description: t(`project.${key}.desc` as TranslationKey),
  };
};