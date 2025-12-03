import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';
import styles from './cart-page.module.scss';
import { CartHeader } from './cart-header';
import { AppHeader } from '@/components/app-header';
import { useCartContext } from '@/contexts/cart-context/cart-context-provider';
import { OrderedPizzaList } from '@/components/ordered-pizza-list';
import { EmptyCart } from './empty-cart.tsx';
import { Price } from '@/components/ui/price/price.tsx';
import { LinkButton } from '@/components/ui/link-button/link-button';
import { routePaths } from '@/constants/constants';

export const CartPage = () => {
  const {
    items: order,
    clearCart,
    removeItem,
    increaseQuantityByOne,
    decreaseQuantityByOne,
  } = useCartContext();

  const isOrderEmpty = order.length === 0;
  const totalPrice = order.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={styles.cart_page}>
      <AppHeader />
      {!isOrderEmpty ? (
        <div className={styles.content}>
          <CartHeader
            className={styles.cart_header}
            title="Cart"
            onClear={clearCart}
          />
          <OrderedPizzaList
            className={styles.ordered_pizza_list}
            orderedPizza={order}
            onRemoveItem={removeItem}
            onDecreaseQuantity={decreaseQuantityByOne}
            onIncreaseQuantity={increaseQuantityByOne}
          />
          <div className={styles.order_total_wrap}>
            <div className={styles.total_quantity}>Items: 3</div>
            <div className={styles.total_price}>
              <span>Price: </span>
              <Price
                value={totalPrice}
                size="md"
                color="accent"
              />
            </div>
          </div>
          <div className={styles.link_buttons_wrap}>
            <LinkButton
              to={routePaths.HOME}
              size="lg"
              variant="subtle"
            >
              <ArrowRightIcon className={styles.arrow_right_icon} />
              Go back
            </LinkButton>
            <LinkButton
              to="#"
              size="lg"
              variant="solid"
              color="accent"
            >
              Checkout
            </LinkButton>
          </div>
        </div>
      ) : (
        <EmptyCart className={styles.empty_cart} />
      )}
    </div>
  );
};
