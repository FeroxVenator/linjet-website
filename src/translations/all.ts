import { Translations } from './index';
import { tr } from './tr';
import { en } from './en';
import { de } from './de';
import { pl } from './pl';
import { fr } from './fr';

export const translations: Record<string, Translations> = {
  tr,
  en,
  de,
  pl,
  fr,
};

export function getTranslation(lang: string): Translations {
  return translations[lang] || translations.tr;
}
