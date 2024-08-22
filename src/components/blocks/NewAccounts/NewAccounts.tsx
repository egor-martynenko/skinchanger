'use client';
import React, { useEffect, useState } from 'react';
import styles from './new-accounts.module.css';
import { Api } from '@/services/api-client';
import { MoveUpRight } from 'lucide-react';
import { useLang } from '@/hooks';
import Link from 'next/link';

import { Product } from '@prisma/client';
import { CatalogItem } from '@/components/modules';

export const NewAccounts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);
  const { translations, lang } = useLang();

  const fetchData = async () => {
    try {
      setLoading(true);

      const newAccounts = await Api.products.newAccounts();

      setLoading(false);
      setData(newAccounts);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className={`container ${styles.new_container}`}>
        <div className={styles.title}>
          <h3>New Accounts</h3>
          <Link href="/">
            <MoveUpRight width={36} height={36} color="white" />
          </Link>
        </div>
        {loading && (
          <ul className={styles.skeleton}>
            {Array.from(new Array(4)).map((_, i) => (
              <li key={i} className={styles.skeleton__item}>
                <div className={styles.skeleton__item__light} />
              </li>
            ))}
          </ul>
        )}
        {!loading && (
          <ul className={styles.accounts_list}>
            {data.map(item => (
              <CatalogItem key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
