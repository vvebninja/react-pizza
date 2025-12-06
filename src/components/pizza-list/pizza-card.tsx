import type { Pizza } from '@/types.ts';
import PlusIcon from '@/assets/icons/plus-icon.svg?react';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './pizza-card.module.scss';
import { useCartContext } from '@/contexts/cart-context/cart-context-provider.tsx';
import { Price } from '@/components/ui/price/price.tsx';
import { Image } from '@/components/ui/image/image';

export const PizzaCard = ({ id, imgSrc, title, doughTypes, sizes, price }: Pizza) => {
  const [selectedDoughType, setSelectedDoughType] = useState(doughTypes[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { items, addItem } = useCartContext();

  const orderedPizzaId = `${id}-${selectedDoughType}-${selectedSize}`;

  const currentQuantity = items.reduce((acc, item) => {
    const isMatch = item.id === orderedPizzaId;
    return acc + (isMatch ? item.quantity : 0);
  }, 0);

  const handleAddClick = () => {
    addItem({
      id: orderedPizzaId,
      imgSrc,
      title,
      doughType: selectedDoughType,
      size: selectedSize,
      price,
    });
  };

  return (
    <div className={styles.pizza_item}>
      <Image
        src={imgSrc}
        alt={title + ' pizza'}
        fit="cover"
        height="280"
        width="280"
        loading="lazy"
      />

      <h3 className={styles.title}>{title}</h3>

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
        <Price
          value={price}
          size="md"
          color="dark"
        />
        <button
          className={styles.add_button}
          type="button"
          onClick={handleAddClick}
        >
          <PlusIcon className={styles.add_button_icon} />
          <span>Add </span>
          {currentQuantity > 0 && <span className={styles.quantity}>{currentQuantity}</span>}
        </button>
      </div>
    </div>
  );
};
