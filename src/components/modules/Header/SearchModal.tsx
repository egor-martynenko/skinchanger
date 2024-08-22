'use client';
import { useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';

import Image from 'next/image';
import Link from 'next/link';

import styles from './search.module.css';

import { Product } from '@prisma/client';
import { Api } from '@/services/api-client';
import { closeSearchModal } from '@/context';
import { useLang } from '@/hooks';
import { removeOverflowHiddenFromBody } from '@/lib/utils';

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const { lang, translations } = useLang();

  const ref = useRef(null);

  const handleCloseSearchModal = () => {
    closeSearchModal();
    removeOverflowHiddenFromBody();
  };

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery],
  );

  useClickAway(ref, () => {
    closeSearchModal();
    removeOverflowHiddenFromBody();
  });

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => {
    e.target.classList.add(`${styles.with_value}`);
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => {
    if (e.target.value) {
      return;
    }

    e.target.classList.remove(`${styles.with_value}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.search_modal} ref={ref}>
        <button
          className={`btn-reset ${styles.search_modal__close}`}
          onClick={handleCloseSearchModal}
        />
        <h3 className={styles.search_modal__title}>
          {translations[lang].header.search}
        </h3>
        <div className={styles.search_modal__top}>
          <label className={styles.search_modal__label}>
            <input
              type="text"
              className={styles.search_modal__input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <span className={styles.search_modal__floating_label}>
              {translations[lang].header.search}
            </span>
          </label>
        </div>
        <ul className={`list-reset ${styles.search_modal__content}`}>
          {products.length > 0 &&
            products.map(product => (
              <li>
                <Link href={product.id} className={styles.search_modal__item}>
                  <Image
                    src={product.imageUrl[0]}
                    alt=""
                    width="100"
                    height="100"
                    className={styles.item_img}
                  />
                  <div className={styles.content}>
                    <h4 className={styles.item_title}>{product.name}</h4>
                    <span className={styles.price}>{product.price} $</span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
