import { Product } from '@prisma/client';

import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const search = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_ACCOUNTS, {
      params: { query },
    })
  ).data;
};

export const newAccounts = async (): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(ApiRoutes.NEW_ACCOUNTS, {})).data;
};
