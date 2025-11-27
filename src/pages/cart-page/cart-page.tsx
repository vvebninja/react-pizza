import styles from './cart-page.module.scss';
import { CartHeader } from '@/components/cart-header';
import { EmptyCart } from '@/components/empty-cart';
import { AppHeader } from '@/components/app-header';
import { useCartContext } from '@/contexts/cart-context/cart-context-provider';
import { OrderedPizzaList } from '@/components/ordered-pizza-list';

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
    <>
      <AppHeader />
      <div className={styles.cart_page}>
        {!isOrderEmpty ? (
          <div className={styles.content_wrap}>
            <CartHeader
              title="CartPage"
              onClear={clearCart}
            />
            <OrderedPizzaList
              orderedPizza={orderedPizza}
              onRemoveItem={removeItem}
              onDecreaseQuantity={decreaseQuantityByOne}
              onIncreaseQuantity={increaseQuantityByOne}
            />
          </div>
        ) : (
          <div className={styles.empty_cart_wrap}>
            <EmptyCart />
          </div>
        )}
      </div>
    </>
  );
};
