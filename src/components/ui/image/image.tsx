import styles from './image.module.scss';
import clsx from 'clsx';

export const Image = ({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  height?: number | string;
  width: number | string;
  className?: string;
}) => {
  return (
    <img
      className={clsx(styles.image, className)}
      src={src}
      alt={alt}
      height={height}
      width={width}
    />
  );
};
