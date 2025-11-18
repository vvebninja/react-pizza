import type { OrderedPizza, Pizza } from '@/types';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './pizza-item.module.scss';
import { useOrderContext } from '@/contexts/order-context';

export const PizzaItem = ({
  id,
  imgSrc,
  title,
  doughTypes,
  sizes,
  price,
  onClick,
}: Pizza & {
  onClick: (pizza: Omit<OrderedPizza, 'quantity'>) => void;
}) => {
  const [selectedDoughType, setSelectedDoughType] = useState(doughTypes[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { order } = useOrderContext();

  const currentQuantity = order.reduce((acc, item) => {
    const isMatch =
      item.id === id && item.doughType === selectedDoughType && item.size === selectedSize;
    return acc + (isMatch ? item.quantity : 0);
  }, 0);

  const handleAddClick = () => {
    onClick({
      id,
      title,
      doughType: selectedDoughType,
      size: selectedSize,
      price,
    });
  };

  return (
    <div className={styles.pizza_item}>
      <div className={styles.img_wrap}>
        <img
          className={styles.img}
          src={imgSrc}
          alt={title + ' pizza'}
        />
      </div>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.options_wrap}>
        <ul className={styles.dough_type_list}>
          {doughTypes.map((t) => (
            <li key={t}>
              <button
                className={clsx(styles.dough_type_button, selectedDoughType === t && styles.active)}
                type="button"
                onClick={() => setSelectedDoughType(t)}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.sizes_list}>
          {sizes.map((s) => (
            <li key={s}>
              <button
                className={clsx(styles.size_button, s === selectedSize && styles.active)}
                type="button"
                onClick={() => setSelectedSize(s)}
              >
                <span>{s}</span>
                <span>cm.</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.price_add_btn_wrap}>
        <div className={styles.price}>
          <span>from</span>
          <span>{price}</span>
          <span>&#8372;</span>
        </div>
        <button
          className={styles.add_button}
          type="button"
          onClick={handleAddClick}
        >
          <span>+</span>
          <span>Add </span>
          {Boolean(currentQuantity) && <span className={styles.quantity}>{currentQuantity}</span>}
        </button>
      </div>
    </div>
  );
};
