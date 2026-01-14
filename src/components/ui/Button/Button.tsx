import clsx from 'clsx';
import React from 'react';
import css from './Button.module.scss';
import type { ButtonOwnProps } from './types';

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;

const defaultElement = 'button';

export const Button = <E extends React.ElementType = typeof defaultElement>({
  size = 'md',
  variant = 'solid',
  color = 'accent',
  weight = 'normal',
  as,
  active = false,
  children,
  className,
  ...restProps
}: ButtonProps<E>) => {
  const Tag = (as || defaultElement) as React.ElementType;

  const buttonClasses = clsx(
    css.button_base,
    css[`size_${size}`],
    css[`variant_${variant}`],
    css[`color_${color}`],
    css[`weight_${weight}`],
    { [css.is_active]: active },
    className,
  );
  return (
    <Tag
      className={buttonClasses}
      {...restProps}
    >
      {children}
    </Tag>
  );
};
