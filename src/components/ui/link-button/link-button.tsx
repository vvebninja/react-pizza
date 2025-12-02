import { Link, type LinkProps } from 'react-router';
import clsx from 'clsx';
import styles from './link-button.module.scss';

type ButtonSize = 'md' | 'lg';
type ButtonVariant = 'solid' | 'subtle';
type ButtonColor = 'accent' | 'dark';

type LinkButtonProps = LinkProps & {
  size: ButtonSize;
  variant: ButtonVariant;
  color?: ButtonColor;
  className?: string;
};

export const LinkButton = ({
  size,
  variant,
  color,
  children,
  className,
  ...restProps
}: LinkButtonProps) => {
  const buttonClasses = clsx(
    styles.button_base,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    className,
  );

  return (
    <Link
      className={buttonClasses}
      {...restProps}
    >
      {children}
    </Link>
  );
};
