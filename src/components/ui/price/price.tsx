import clsx from 'clsx';
import { type FC } from 'react';
import css from './price.module.scss';

type PriceProps = {
  value: string | number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'dark' | 'accent' | 'light';
  className?: string;
};

export const Price: FC<PriceProps> = ({ value, size = 'md', color = 'dark', className }) => {
  const classNames = clsx(css.price, css[size], css[color], className);

  return (
    <div className={classNames}>
      <span className={css.price_value}>{value}</span>
      <span className={css.price_currency}>₴</span>
    </div>
  );
};
