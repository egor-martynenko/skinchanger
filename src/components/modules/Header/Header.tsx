'use client';
import React from 'react';
import {
  Menu as MenuBurger,
  Search,
  ListPlus,
  ShoppingCart,
  CircleUser,
} from 'lucide-react';

import styles from './header.module.css';

import { Logo } from '@/components/elements';
import { CartPopup, Menu } from '@/components/modules';

import { useLang, useMediaQuery } from '@/hooks';
import { addOverflowHiddenToBody } from '@/lib/utils';
import { openMenu, openSearchModal } from '@/context';

const handleOpenMenu = () => {
  addOverflowHiddenToBody();
  openMenu();
};

export const Header = () => {
  const { lang, translations } = useLang();
  const isMedia800 = useMediaQuery(800);
  const handleOpenSearchModal = () => {
    openSearchModal();
    addOverflowHiddenToBody();
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <button
          className={`btn-reset ${styles.header__burger}`}
          onClick={handleOpenMenu}
        >
          <MenuBurger />
          <span>{translations[lang].header.menu_btn}</span>
        </button>
        <Menu />

        <div className={styles.header__logo}>
          <Logo />
        </div>

        {!isMedia800 && (
          <ul className={`list-reset ${styles.header__links}`}>
            <li>
              <button className="btn-reset" onClick={handleOpenSearchModal}>
                <Search color="white" />
              </button>
            </li>
            {/* <li>
              <ListPlus />
            </li> */}
            <li>
              <CartPopup />
            </li>
            <li>
              <CircleUser />
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
