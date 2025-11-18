import styles from './filter-section.module.scss';

export const FilterSection = ({
  categories,
  sort,
}: {
  categories: React.ReactElement;
  sort: React.ReactElement;
}) => {
  return (
    <section className={styles.filter_section}>
      <div className={styles.categories_wrap}>{categories}</div>
      <div className={styles.sort_wrap}>{sort}</div>
    </section>
  );
};
