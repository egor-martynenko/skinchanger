'use client';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './cart-popup.module.css';
import { X, Trash } from 'lucide-react';
import Image from 'next/image';

export const CartPopup = () => {
  const [isShowCart, setShowCart] = useState(false);
  const handleShowPopup = () => {
    setShowCart(true);
  };
  const handleClosePopup = () => {
    setShowCart(false);
  };
  return (
    <div className={styles.cart_popup}>
      <Link
        href="/cart"
        className={styles.cart_icon}
        onMouseEnter={handleShowPopup}
      >
        <ShoppingCart />
      </Link>
      {isShowCart && (
        <div className={styles.wrapper}>
          <span className={styles.arrow} />
          <div className={styles.title} onClick={handleClosePopup}>
            <span>Cart</span>
            <X />
          </div>
          <ul className={`list-reset ${styles.list}`}>
            <li className={styles.item}>
              <Image
                src={'/img/account/fifth-account-1.jpg'}
                width={100}
                height={100}
                alt="cartImage"
              />
              <div className={styles.body}>
                <span className={styles.item_title}>OG STW | Og Skull ...</span>
                <Trash />
                <span className={styles.item_price}>$ 180</span>
              </div>
            </li>
            <li className={styles.item}>
              <Image
                src={'/img/account/fifth-account-1.jpg'}
                width={100}
                height={100}
                alt="cartImage"
              />
              <div className={styles.body}>
                <span className={styles.item_title}>OG STW | Og Skull ...</span>
                <Trash />
                <span className={styles.item_price}>$ 140</span>
              </div>
            </li>
            <li className={styles.item}>
              <Image
                src={'/img/account/fifth-account-1.jpg'}
                width={100}
                height={100}
                alt="cartImage"
              />
              <div className={styles.body}>
                <span className={styles.item_title}>OG STW | Og Skull ...</span>
                <Trash />
                <span className={styles.item_price}>$ 320</span>
              </div>
            </li>
          </ul>

          <div className={styles.footer}>
            <div className={styles.price}>
              <span>Order total:</span>
              <div>$ 540</div>
            </div>
            <button className={`btn-reset ${styles.button}`}>
              Place an order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
