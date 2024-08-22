'use client';
import { AllowedLangs } from '@/constants';
import { createDomain } from 'effector';

export const lang = createDomain();

export const setLang = lang.createEvent<AllowedLangs>();

export const $lang = lang
  .createStore(AllowedLangs.EN)
  .on(setLang, (_, lang) => lang);
