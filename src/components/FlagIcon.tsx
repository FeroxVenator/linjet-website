import React from 'react';
import { type SupportedLanguage } from '../routes';

interface FlagIconProps {
  lang: SupportedLanguage;
  className?: string;
}

export function FlagIcon({ lang, className = "w-5 h-4" }: FlagIconProps) {
  const flags: Record<SupportedLanguage, JSX.Element> = {
    tr: (
      <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="480" fill="#e30a17"/>
        <circle cx="275" cy="240" r="120" fill="#fff"/>
        <circle cx="300" cy="240" r="96" fill="#e30a17"/>
        <polygon points="365,140 345,205 400,165 330,165 385,205" fill="#fff" transform="translate(45, 45)"/>
      </svg>
    ),
    en: (
      <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="a">
          <path d="M-85.333 0h682.67v512h-682.67z"/>
        </clipPath>
        <g clipPath="url(#a)" transform="translate(80) scale(.94)">
          <g strokeWidth="1pt">
            <path fill="#006" d="M-256 0H768v512H-256z"/>
            <path d="M-256 0v57.244L653.5 512H768v-57.243L-141.5 0H-256zM768 0v57.243L-141.5 512H-256v-57.244L653.5 0H768z" fill="#fff"/>
            <path d="M170.667 0v512h170.67V0h-170.67zM-256 170.667v170.67H768v-170.67H-256z" fill="#fff"/>
            <path d="M-256 204.8v102.4H768V204.8H-256zM204.8 0v512h102.4V0H204.8zM-256 512L85.333 341.333h76.134L-256 512zM-256 0L85.333 170.667H9.199L-256 38.4V0zm606.134 170.667L768 0h-76.134L273.066 170.667h77.067zM768 512L426.667 341.333H503.5L768 473.6V512z" fill="#c00"/>
          </g>
        </g>
      </svg>
    ),
    de: (
      <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="160" y="0" fill="#000"/>
        <rect width="640" height="160" y="160" fill="#D00"/>
        <rect width="640" height="160" y="320" fill="#FFCE00"/>
      </svg>
    ),
    pl: (
      <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="240" y="0" fill="#fff"/>
        <rect width="640" height="240" y="240" fill="#dc143c"/>
      </svg>
    ),
    fr: (
      <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="213.33" height="480" x="0" fill="#002395"/>
        <rect width="213.33" height="480" x="213.33" fill="#fff"/>
        <rect width="213.33" height="480" x="426.67" fill="#ED2939"/>
      </svg>
    ),
  };

  return flags[lang] || null;
}
