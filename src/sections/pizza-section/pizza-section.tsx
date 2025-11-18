import styles from './pizza-section.module.scss';

export const PizzaSection = ({ pizzaListSlot }: { pizzaListSlot: React.ReactElement }) => {
  return <section className={styles.section}>{pizzaListSlot}</section>;
};
