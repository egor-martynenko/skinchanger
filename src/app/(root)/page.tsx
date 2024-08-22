'use client';
import SearchModal from '@/components/modules/Header/SearchModal';
import { $searchModal } from '@/context';
import { useUnit } from 'effector-react';
import { Advantages, Hero, NewAccounts } from '@/components/blocks';

export default function Home() {
  const searchModal = useUnit($searchModal);
  return (
    <>
      {searchModal && <SearchModal />}
      <Hero />
      <Advantages />
      <NewAccounts />
    </>
  );
}
