import styles from './ordered-pizza-card.module.scss';
import RemoveIcon from '@/assets/icons/close-icon.svg?react';
import MinusIcon from '@/assets/icons/minus-icon.svg?react';
import PlusIcon from '@/assets/icons/plus-icon.svg?react';

import type { OrderedPizza } from '@/types.ts';

export const OrderedPizzaCard = ({
  id,
  title,
  imgSrc,
  doughType,
  size,
  quantity,
  price,
  onRemove,
  onDecreaseQuantity,
  onIncreaseQuantity,
}: OrderedPizza & {
  onRemove: (id: OrderedPizza['id']) => void;
  onDecreaseQuantity: (id: OrderedPizza['id']) => void;
  onIncreaseQuantity: (id: OrderedPizza['id']) => void;
}) => {
  return (
    <article className={styles.root}>
      <div className={styles.info}>
        <div className={styles.image}>
          <img
            src={imgSrc}
            alt={title + ' pizza'}
          />
        </div>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>
            <span>{doughType},</span>
            <span>{size}</span>
          </p>
        </div>
        <button
          className={styles.remove_button}
          type="button"
          onClick={() => onRemove(id)}
        >
          <RemoveIcon />
        </button>
      </div>

      <p className={styles.price}>
        {price}
        <span>&#8372;</span>
      </p>

      <div className={styles.quantity_control}>
        <button
          className={styles.decrease_button}
          type="button"
          onClick={() => onDecreaseQuantity(id)}
          disabled={quantity === 0}
        >
          <MinusIcon />
        </button>
        <span>{quantity}</span>
        <button
          className={styles.increase_button}
          type="button"
          onClick={() => onIncreaseQuantity(id)}
        >
          <PlusIcon />
        </button>
      </div>
    </article>
  );
};
