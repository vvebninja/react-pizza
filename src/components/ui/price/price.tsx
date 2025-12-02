import clsx from 'clsx';
import styles from './price.module.scss';

export const Price = ({
  value,
  size,
  color,
  className,
}: {
  value: string | number;
  size: 'sm' | 'md';
  color: 'dark' | 'accent' | 'light';
  className?: string;
}) => {
  return (
    <span className={clsx(styles.price, styles[size], styles[color], className)}>
      {value} &#8372;
    </span>
  );
};
