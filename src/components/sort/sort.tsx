import styles from './sort.module.scss';

export const Sort = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <select
      className={styles.select}
      name="sort"
      value={value}
      onChange={onChange}
    >
      <button className={styles.button}>
        <span>sort by:</span>
        <selectedcontent></selectedcontent>
      </button>
      <option
        className={styles.option}
        value="price"
      >
        price
      </option>
      <option
        className={styles.option}
        value="popularity"
      >
        popularity
      </option>
    </select>
  );
};
