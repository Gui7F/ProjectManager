'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';

export default function LanguageSwitcher() {
  const { t } = useTranslation();

  const changeLanguage = (lng: 'en' | 'pt') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage('pt')}>🇧🇷 Português</button>
        <button onClick={() => changeLanguage('en')} style={{ marginLeft: '1rem' }}>
          🇺🇸 English
        </button>
      </div>
    </div>
  );
}