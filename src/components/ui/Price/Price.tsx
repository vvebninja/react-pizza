import clsx from 'clsx';
import css from './Price.module.scss';

type PriceProps = {
  value: string | number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'dark' | 'accent' | 'light';
  className?: string;
};

export const Price = ({ value, size = 'md', color = 'dark', className }: PriceProps) => {
  const classNames = clsx(css.price, css[size], css[color], className);

  return (
    <div className={classNames}>
      <span>{value}</span>
      <span className={css.price_currency}>₴</span>
    </div>
  );
};
