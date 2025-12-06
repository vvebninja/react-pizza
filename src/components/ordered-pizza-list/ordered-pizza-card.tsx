import styles from './ordered-pizza-card.module.scss';
import type { OrderedPizza } from '@/types.ts';
import { RemoveButton } from '@/components/ui/remove-button/remove-button.tsx';
import { QuantityControls } from '@/components/ui/quantity-controls/quantity-controls.tsx';
import { Price } from '@/components/ui/price/price';
import { Image } from '@/components/ui/image/image';
import { useCartContext } from '@/contexts/cart-context';

export const OrderedPizzaCard = ({
  id,
  title,
  imgSrc = '@/assets/img/pizza-img.jpg',
  doughType,
  size,
  quantity,
  price,
}: OrderedPizza & {}) => {
  const { increaseQuantityByOne, decreaseQuantityByOne, removeItem } = useCartContext();
  const totalPrice = price * quantity;

  return (
    <article className={styles.root}>
      <div className={styles.info}>
        <Image
          src={imgSrc}
          alt={title + ' pizza'}
          width={80}
          fit="cover"
        />
        <div className={styles.card_text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>
            {doughType}, {size}
          </p>
        </div>
      </div>
      <RemoveButton
        className={styles.remove_button}
        onRemove={() => removeItem(id)}
      />

      <Price
        className={styles.price}
        value={totalPrice}
        size="md"
        color="dark"
      />
      <QuantityControls
        className={styles.quantity_controls}
        quantity={quantity}
        onDecrease={() => decreaseQuantityByOne(id)}
        onIncrease={() => increaseQuantityByOne(id)}
      />
    </article>
  );
};
