import { PizzaList, PizzaListSkeletons } from '@/components/PizzaList';
import type { HomeLoaderType } from '@/pages/home';
import { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import css from './Menu.module.scss';

export const Menu = () => {
  const { pizzasPromise } = useLoaderData<HomeLoaderType>();

  return (
    <div className={css.menu}>
      <h1 className={css.menu_title}>Menu</h1>
      <Suspense fallback={<PizzaListSkeletons />}>
        <PizzaList pizzasPromise={pizzasPromise} />
      </Suspense>
    </div>
  );
};
