import PlusIcon from '@/assets/icons/plus-icon.svg?react';
import type { Pizza } from '@/data/types';
import clsx from 'clsx';
import { Price } from '../ui/price/price';
import css from './pizza-card.module.scss';

type PizzaCardProps = {
  pizza: Pizza;
};

export const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const { imgSrc, title, doughTypes, sizes, price } = pizza;
  const imgUrl = `${import.meta.env.BASE_URL}/${imgSrc}`.replace(/\/+/g, '/');
  const selectedDoughType = doughTypes[0];
  const selectedSize = sizes[0];
  const currentQuantity = 0;

  return (
    <div className={css.pizza}>
      <img
        className={css.pizza_img}
        src={imgUrl}
        alt={title + ' pizza'}
        height="280"
        width="280"
        loading="lazy"
      />

      <h3 className={css.pizza_title}>{title}</h3>

      <div className={css.pizza_options_wrap}>
        <ul className={css.pizza_options_group}>
          {doughTypes.map(doughType => (
            <li key={doughType}>
              <button
                className={clsx(css.pizza_option_dough_btn, {
                  [css.is_active]: selectedDoughType === doughType,
                })}
                type="button"
              >
                {doughType}
              </button>
            </li>
          ))}
        </ul>

        <ul className={css.pizza_options_group}>
          {sizes.map(size => (
            <button
              className={clsx(css.pizza_option_size_btn, {
                [css.is_active]: size === selectedSize,
              })}
              type="button"
            >
              <span>{size}</span>
              <span>cm.</span>
            </button>
          ))}
        </ul>
      </div>

      <div className={css.pizza_footer}>
        <Price
          value={price}
          size="md"
          color="dark"
        />
        <button
          className={css.pizza_add_btn}
          type="button"
        >
          <PlusIcon className={css.pizza_add_icon} />
          <span>Add </span>
          {currentQuantity > 0 && <span className={css.pizza_quantity}>{currentQuantity}</span>}
        </button>
      </div>
    </div>
  );
};
