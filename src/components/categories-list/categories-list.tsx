import { CategoryButton } from './category-button.tsx';
import styles from './categories-list.module.scss';

export const CategoriesList = ({
  categories,
  onClick,
  selectedCategory,
}: {
  categories: string[];
  selectedCategory: string;
  onClick: (category: string) => void;
}) => {
  return (
    <ul className={styles.list}>
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            categoryText={category}
            selectedCategory={selectedCategory}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
};
