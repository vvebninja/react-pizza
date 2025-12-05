import styles from './image.module.scss';
import clsx from 'clsx';

export const Image = ({
  alt,
  fit,
  className,
  ...restProps
}: {
  fit: 'cover' | 'contain';
  width: number | string;
  alt: string;
  className?: string;
} & React.ComponentProps<'img'>) => {
  const classNames = clsx(styles.image_base, styles[`fit_${fit}`], className);

  return (
    <img
      className={classNames}
      {...restProps}
      alt={alt}
    />
  );
};
