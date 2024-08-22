import React from 'react';
import styles from './catalog-item.module.css';
import {
  Drama,
  Bitcoin,
  Pyramid,
  Pickaxe,
  ScanFace,
  Backpack,
  Command,
  Gift,
  SprayCan,
  CloudDownload,
} from 'lucide-react';

import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export const CatalogItem = ({ item }: { item: Product }) => {
  return (
    <li className={styles.catalog_item}>
      <div className={styles.list__item__img}>
        <Image src={item.imageUrl[0]} alt={item.name} fill />
      </div>

      <h5 className={styles.title}>{item.name}</h5>
      <ul className={`list-reset ${styles.tags_list}`}>
        <li className={styles.tag}>
          <Drama />
          <span>{item.specifications.items} skins</span>
        </li>
        <li className={styles.tag}>
          <Bitcoin />
          <span>{item.specifications.vbaks} B-buck</span>
        </li>
        <li className={styles.tag}>
          <Pyramid />
          <span>account level {item.specifications.acclvl}</span>
        </li>
        <li className={styles.tag}>
          <Pickaxe />
          <span>{item.specifications.pickaxes} pickaxes</span>
        </li>
        <li className={styles.tag}>
          <ScanFace />
          <span>{item.specifications.emotes} emotes</span>
        </li>
        <li className={styles.tag}>
          <Backpack />
          <span>{item.specifications.backblings} backblings</span>
        </li>
        <li className={styles.tag}>
          <Command />
          <span>{item.specifications.gliders} gliders</span>
        </li>
        <li className={styles.tag}>
          <Gift />
          <span>{item.specifications.wraps} wraps</span>
        </li>
        <li className={styles.tag}>
          <SprayCan />
          <span>{item.specifications.sprays} sprays</span>
        </li>
        <li className={styles.tag}>
          <CloudDownload />
          <span>{item.specifications.loadings} loadings</span>
        </li>
      </ul>
      <div className={styles.footer}>
        <div className={styles.price}>
          ${item.price} <span>usd</span>
        </div>
        <div className={styles.item_btn}>Add to cart</div>
      </div>
      <Link href={'/'} className={styles.more}>
        more information ...
      </Link>
    </li>
  );
};
