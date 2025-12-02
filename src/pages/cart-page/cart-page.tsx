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
    items: orderedPizza,
    clearCart,
    removeItem,
    increaseQuantityByOne,
    decreaseQuantityByOne,
  } = useCartContext();

  const isOrderEmpty = orderedPizza.length === 0;

  return (
    <div className={styles.cart_page}>
      <AppHeader />
      {!isOrderEmpty ? (
        <div className={styles.content}>
          <CartHeader
            title="Cart"
            onClear={clearCart}
          />
          <OrderedPizzaList
            className={styles.ordered_pizza_list}
            orderedPizza={orderedPizza}
            onRemoveItem={removeItem}
            onDecreaseQuantity={decreaseQuantityByOne}
            onIncreaseQuantity={increaseQuantityByOne}
          />
          <div className={styles.order_total_wrap}>
            <div className={styles.total_quantity}>Total ordered: 3</div>
            <div className={styles.total_price}>
              <span>Total: </span>
              <Price
                value="22"
                size="md"
                color="accent"
              />
            </div>
          </div>
          <div className={styles.link_btn_wrap}>
            <LinkButton
              to={routePaths.HOME}
              size="lg"
              variant="subtle"
            >
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
