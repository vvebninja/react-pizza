import styles from './ordered-pizza-card.module.scss';
import type { OrderedPizza } from '@/types.ts';
import { RemoveButton } from '@/components/ui/remove-button/remove-button.tsx';
import { QuantityControl } from '@/components/ui/quantity-control/quantity-control.tsx';
import { Price } from '@/components/ui/price/price';
import { Image } from '@/components/ui/image/image';

export const OrderedPizzaCard = ({
  id,
  title,
  imgSrc = '@/assets/img/pizza-img.jpg',
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
  const totalPrice = price * quantity;

  return (
    <article className={styles.root}>
      <Image
        src={imgSrc}
        alt={title + ' pizza'}
        width={80}
      />
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>
          {doughType}, {size}
        </p>
      </div>
      <RemoveButton onRemove={() => onRemove(id)} />

      <Price
        className={styles.price}
        value={totalPrice}
        size="md"
        color="dark"
      />
      <QuantityControl
        className={styles.counter}
        quantity={quantity}
        onDecrease={() => onDecreaseQuantity(id)}
        onIncrease={() => onIncreaseQuantity(id)}
      />
    </article>
  );
};
