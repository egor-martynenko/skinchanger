'use client';
import { useLang } from '@/hooks';
import styles from './advantages.module.css';

export const Advantages = () => {
  const { translations, lang } = useLang();
  return (
    <section className={styles.advantages}>
      <div className={`container ${styles.advantages__container}`}>
        <ul className={styles.advantages__list}>
          <li className={styles.wrapper}>
            <div className={styles.list__item}>
              <img className={styles.decImgThree} src="/img/box.png" />
              <span className={styles.title}>
                {translations[lang].advantages.thirdTitle}
              </span>
              <p className={styles.description}>
                {translations[lang].advantages.thirdTxt}
              </p>
            </div>
          </li>
          <li className={styles.wrapper}>
            <div className={styles.list__item}>
              <img className={styles.decImgOne} src="/img/pair.png" />
              <span className={styles.title}>
                {translations[lang].advantages.firstTitle}
              </span>
              <p className={styles.description}>
                {translations[lang].advantages.firstTxt}
              </p>
            </div>
          </li>
          <li className={styles.wrapper}>
            <div className={styles.list__item}>
              <img className={styles.decImgTwo} src="/img/grenade.png" />
              <span className={styles.title}>
                {translations[lang].advantages.secTitle}
              </span>
              <p className={styles.description}>
                {translations[lang].advantages.secTxt}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
