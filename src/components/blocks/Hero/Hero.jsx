'use client';
import React from 'react';
import cn from 'clsx';
import styles from './hero.module.css';
import { useLang } from '@/hooks';

export const Hero = () => {
  const { lang, translations } = useLang();
  return (
    <div className={styles.hero}>
      <div className={`container ${styles.hero__container}`}>
        <h1 className={styles.hero__title}>{translations[lang].hero.title}</h1>
        <p className={styles.hero__description}>
          {translations[lang].hero.description}
        </p>

        <ul className={cn('list-reset', styles.statistics__list)}>
          <li className={styles.statistics__item}>
            <span>{translations[lang].hero.statistics.skins}</span>
            <p>1.328</p>
          </li>
          <li className={styles.statistics__item}>
            <span>{translations[lang].hero.statistics.accounts}</span>
            <p>134</p>
          </li>
          <li className={styles.statistics__item}>
            <span>{translations[lang].hero.statistics.transactions}</span>
            <p>12.063</p>
          </li>
        </ul>

        <button className={`btn-reset ${styles.hero__btn} `}>
          <span>{translations[lang].hero.btn}</span>
        </button>
      </div>
    </div>
  );
};
