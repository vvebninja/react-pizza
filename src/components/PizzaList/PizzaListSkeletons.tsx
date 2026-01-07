import css from './PizzaList.module.scss';

export const PizzaListSkeletons = () => {
  const sk = [...Array(8)];

  return (
    <ul className={css.pizza_list}>
      {sk.map((_, i) => (
        <li key={i}>
          <div className={css.pizza_list_skeleton} />
        </li>
      ))}
    </ul>
  );
};
