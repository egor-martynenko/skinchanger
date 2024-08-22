'use client';
import React from 'react';
import { useUnit } from 'effector-react';
import { X } from 'lucide-react';

import styles from './menu.module.css';

import cn from 'clsx';

import { $menuIsOpen, closeMenu, setLang } from '@/context';
import { useLang } from '@/hooks';
import { Logo } from '@/components/elements';
import { removeOverflowHiddenFromBody } from '@/lib/utils';
import { AllowedLangs } from '@/constants';

export const Menu = () => {
  const { lang, translations } = useLang();

  const menuIsOpen = useUnit($menuIsOpen);
  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody();
    closeMenu();
  };

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs);
    localStorage.setItem('lang', JSON.stringify(lang));
  };

  const handleSwitchLangToRu = () => handleSwitchLang('ru');
  const handleSwitchLangToEn = () => handleSwitchLang('en');

  return (
    <nav
      className={cn(styles.menu, {
        [styles.open]: menuIsOpen,
      })}
    >
      <div className="container">
        <div
          className={cn(styles.menu__logo, {
            [styles.open]: menuIsOpen,
          })}
        >
          <Logo />
        </div>

        <button
          className={cn('btn-reset', styles.menu__close, {
            [styles.open]: menuIsOpen,
          })}
          onClick={handleCloseMenu}
        >
          <X />
        </button>

        <div
          className={cn(styles.menu__lang, {
            [styles.open]: menuIsOpen,
          })}
        >
          <button
            className={cn('btn-reset', styles.menu__lang__btn, {
              [styles.lang_active]: lang === 'ru',
            })}
            onClick={handleSwitchLangToRu}
          >
            RU
          </button>
          <button
            className={cn('btn-reset', styles.menu__lang__btn, {
              [styles.lang_active]: lang === 'en',
            })}
            onClick={handleSwitchLangToEn}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};
