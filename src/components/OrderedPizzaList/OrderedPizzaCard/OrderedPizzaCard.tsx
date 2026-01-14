import type { DoughOption, Pizza, SizeOption } from '@/api/pizza.schema';
import { Clear, Minus, Plus } from '@/assets/icons';
import { Price } from '@/components/ui/Price';
import { useCartContext } from '@/contexts/cart';
import css from './OrderedPizzaCard.module.scss';

export type OrderedPizza = {
  id: Pizza['id'];
  title: Pizza['title'];
  imgSrc: Pizza['imgSrc'];
  dough: DoughOption['name'];
  size: SizeOption['value'];
  price: number;
  quantity: number;
};

interface OrderedPizzaCardProps {
  pizza: OrderedPizza;
}

export const OrderedPizzaCard = ({ pizza }: OrderedPizzaCardProps) => {
  const { id, title, imgSrc, dough, size, quantity, price } = pizza;
  const totalPrice = price * quantity;

  const { removeItem, increaseItemQuantityByOne, decreaseItemQuantityByOne } = useCartContext();

  const handleRemoveItemClick = () => removeItem(id);

  const handleIncreaseQuantityClick = () => increaseItemQuantityByOne(id);

  const handleDecreaseQuantityClick = () => decreaseItemQuantityByOne(id);

  return (
    <article className={css.root}>
      <div className={css.pizza_info}>
        <img
          className={css.image}
          src={imgSrc}
          alt={title}
          width={80}
          height={80}
        />
        <div className={css.details}>
          <h3 className={css.title}>{title}</h3>
          <p className={css.subtitle}>
            {dough}, {size} cm.
          </p>
        </div>
      </div>

      <div className={css.pizza_counter}>
        <button
          className={css.button}
          disabled={quantity === 1}
          onClick={handleDecreaseQuantityClick}
        >
          <Minus />
        </button>
        <span className={css.count}>{quantity}</span>
        <button
          className={css.button}
          onClick={handleIncreaseQuantityClick}
        >
          <Plus />
        </button>
      </div>

      <div className={css.pizza_actions}>
        <Price
          className={css.price}
          value={totalPrice}
          size="md"
        />
        <button
          className={css.remove_btn}
          type="button"
          onClick={handleRemoveItemClick}
        >
          <Clear />
        </button>
      </div>
    </article>
  );
};
