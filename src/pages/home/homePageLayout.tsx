import type { ReactNode } from 'react';
import css from './HomePageLayout.module.scss';

type Components = 'header' | 'categories' | 'sort' | 'menu';

type HomePageLayoutProps = Record<Components, ReactNode>;

export const HomePageLayout = ({ header, categories, sort, menu }: HomePageLayoutProps) => {
  return (
    <div>
      {header}
      <div className={css.filters_wrap}>
        <div className={css.categories}>{categories}</div>
        <div className={css.sort}>{sort}</div>
      </div>
      {menu}
    </div>
  );
};
