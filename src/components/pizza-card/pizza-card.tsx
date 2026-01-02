import type { Pizza } from '@/api/pizza';
import PlusIcon from '@/assets/icons/plus-icon.svg?react';
import { useCartContext } from '@/contexts/cart';
import clsx from 'clsx';
import { useState } from 'react';
import { Price } from '../ui/price/price';
import css from './pizza-card.module.scss';

type PizzaCardProps = {
  pizza: Pizza;
};

export const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const { id, imgSrc, title, doughTypes, sizes, price } = pizza;
  const [selectedDoughType, setSelectedDoughType] = useState(doughTypes[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { items: orderedPizza, addItem } = useCartContext();

  const orderedPizzaId = [id, selectedDoughType, selectedSize].join('-');
  const currentQuantity = orderedPizza.find(pizza => pizza.id === orderedPizzaId)?.quantity;

  const handleDoughTypeClick = (type: string) => {
    setSelectedDoughType(type);
  };

  const handleSizeClick = (size: number) => {
    setSelectedSize(size);
  };

  const handleAddPizzaClick = () => {
    addItem({
      ...pizza,
      doughType: selectedDoughType,
      size: selectedSize,
      id: orderedPizzaId,
      quantity: 1,
    });
  };

  return (
    <div className={css.pizza}>
      <img
        className={css.pizza_img}
        src={imgSrc}
        alt={title + ' pizza'}
        height="280"
        width="280"
        loading="lazy"
        decoding="sync"
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
                onClick={() => handleDoughTypeClick(doughType)}
              >
                {doughType}
              </button>
            </li>
          ))}
        </ul>

        <ul className={css.pizza_options_group}>
          {sizes.map(size => (
            <li key={size}>
              <button
                className={clsx(css.pizza_option_size_btn, {
                  [css.is_active]: size === selectedSize,
                })}
                type="button"
                onClick={() => handleSizeClick(size)}
              >
                <span>{size}</span>
                <span>cm.</span>
              </button>
            </li>
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
          onClick={handleAddPizzaClick}
        >
          <PlusIcon className={css.pizza_add_icon} />
          <span>Add </span>
          {currentQuantity && <span className={css.pizza_quantity}>{currentQuantity}</span>}
        </button>
      </div>
    </div>
  );
};
