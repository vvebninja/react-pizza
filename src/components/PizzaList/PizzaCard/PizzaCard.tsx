import type { DoughOption, Pizza, SizeOption } from '@/api/pizza.schema';
import PlusIcon from '@/assets/icons/plus-icon.svg?react';
import { Price } from '@/components/ui/Price';
import { useCartContext } from '@/contexts/cart';
import clsx from 'clsx';
import { useState } from 'react';
import css from './PizzaCard.module.scss';

type PizzaCardProps = {
  pizza: Pizza;
};

export const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const { id, imgSrc, title, options, price } = pizza;

  const [selectedDough, setSelectedDough] = useState(
    () => options.dough.find(dough => dough.isAvailable) || options.dough[0],
  );
  const [selectedSize, setSelectedSize] = useState(
    options.sizes.find(size => size.isAvailable) || options.sizes[0],
  );
  const { items: orderedPizza, addItem } = useCartContext();

  const orderedPizzaId = [id, selectedDough, selectedSize].join('-');

  const currentQuantity = orderedPizza.find(pizza => pizza.id === orderedPizzaId)?.quantity;

  const currentPrice = price + selectedDough.extraPrice + selectedSize.extraPrice;

  const handleDoughClick = (dough: DoughOption) => {
    if (!dough.isAvailable) return;
    setSelectedDough(dough);
  };

  const handleSizeClick = (size: SizeOption) => {
    if (!size.isAvailable) return;
    setSelectedSize(size);
  };

  const handleAddPizzaClick = () => {
    addItem({
      id: orderedPizzaId,
      imgSrc,
      title,
      price: currentPrice,
      dough: selectedDough.name,
      size: selectedSize.value,
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
          {options.dough.map(dough => (
            <li key={dough.id}>
              <button
                className={clsx(css.pizza_option_dough_btn, {
                  [css.is_active]: selectedDough.name === dough.name,
                })}
                type="button"
                onClick={() => handleDoughClick(dough)}
                disabled={!dough.isAvailable}
              >
                {dough.name}
              </button>
            </li>
          ))}
        </ul>

        <ul className={css.pizza_options_group}>
          {options.sizes.map(size => (
            <li key={size.id}>
              <button
                className={clsx(css.pizza_option_size_btn, {
                  [css.is_active]: size.value === selectedSize.value && selectedSize.isAvailable,
                })}
                type="button"
                onClick={() => handleSizeClick(size)}
                disabled={!size.isAvailable}
              >
                <span>{size.value}</span>
                <span>cm.</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.pizza_footer}>
        <Price
          value={currentPrice}
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
