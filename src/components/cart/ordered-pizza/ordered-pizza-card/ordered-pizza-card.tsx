import css from './ordered-pizza-card.module.scss';
import RemoveIcon from '@/assets/icons/remove-icon.svg?react';
import MinusIcon from '@/assets/icons/minus-icon.svg?react';
import PlusIcon from '@/assets/icons/plus-icon.svg?react';
import { Price } from '@/components/ui/price/price';
import type { OrderedPizza } from '@/data/types';

interface OrderedPizzaCardProps {
  pizza: OrderedPizza;
}

export const OrderedPizzaCard = ({ pizza }: OrderedPizzaCardProps) => {
  const { title, imgSrc, doughType, size, quantity, price } = pizza;

  const imgUrl = `${import.meta.env.BASE_URL}/${imgSrc}`.replace(/\/+/g, '/');
  const totalPrice = price * quantity;

  return (
    <article className={css.ordered_pizza}>
      <div className={css.ordered_pizza_info}>
        <img
          className={css.ordered_pizza_img}
          src={imgUrl}
          alt={title}
          width={80}
          height={80}
        />
        <div className={css.ordered_pizza_details}>
          <h3 className={css.ordered_pizza_title}>{title}</h3>
          <p className={css.ordered_pizza_subtitle}>
            {doughType}, {size} cm.
          </p>
        </div>
      </div>

      {/* 2. Counter Block */}
      <div className={css.ordered_pizza_counter}>
        <button
          className={css.ordered_pizza_counter_btn}
          disabled={quantity === 1}
        >
          <MinusIcon />
        </button>
        <span className={css.ordered_pizza_counter_count}>{quantity}</span>
        <button className={css.ordered_pizza_counter_btn}>
          <PlusIcon />
        </button>
      </div>

      {/* 3. Price & Remove Block */}
      <div className={css.ordered_pizza_actions}>
        <Price
          className={css.ordered_pizza_price}
          value={totalPrice}
          size="md"
        />
        <button
          className={css.ordered_pizza_remove}
          type="button"
        >
          <RemoveIcon className={css.ordered_pizza_remove_icon} />
        </button>
      </div>
    </article>
  );
};
