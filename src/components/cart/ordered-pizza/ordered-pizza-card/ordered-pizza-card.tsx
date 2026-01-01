import css from './ordered-pizza-card.module.scss';
import RemoveIcon from '@/assets/icons/remove-icon.svg?react';
import MinusIcon from '@/assets/icons/minus-icon.svg?react';
import PlusIcon from '@/assets/icons/plus-icon.svg?react';
import { Price } from '@/components/ui/price/price';
import type { Pizza } from '@/api/pizza';
import { useCartContext } from '@/contexts/cart';

export type OrderedPizza = Omit<Pizza, 'doughTypes' | 'sizes'> & {
  doughType: string;
  size: number;
  quantity: number;
};

interface OrderedPizzaCardProps {
  pizza: OrderedPizza;
}

export const OrderedPizzaCard = ({ pizza }: OrderedPizzaCardProps) => {
  const { id, title, imgSrc, doughType, size, quantity, price } = pizza;
  const totalPrice = price * quantity;

  const { removeItem, increaseItemQuantityByOne, decreaseItemQuantityByOne } = useCartContext();

  const handleRemoveItemClick = () => removeItem(id);

  const handleIncreaseQuantityClick = () => increaseItemQuantityByOne(id);

  const handleDecreaseQuantityClick = () => decreaseItemQuantityByOne(id);

  return (
    <article className={css.ordered_pizza}>
      <div className={css.ordered_pizza_info}>
        <img
          className={css.ordered_pizza_img}
          src={imgSrc}
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
          onClick={handleDecreaseQuantityClick}
        >
          <MinusIcon />
        </button>
        <span className={css.ordered_pizza_counter_count}>{quantity}</span>
        <button
          className={css.ordered_pizza_counter_btn}
          onClick={handleIncreaseQuantityClick}
        >
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
          onClick={handleRemoveItemClick}
        >
          <RemoveIcon className={css.ordered_pizza_remove_icon} />
        </button>
      </div>
    </article>
  );
};
