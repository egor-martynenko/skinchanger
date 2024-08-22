import { createDomain } from 'effector';

const menu = createDomain();

export const openMenu = menu.createEvent();
export const closeMenu = menu.createEvent();

export const $menuIsOpen = menu
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false);
