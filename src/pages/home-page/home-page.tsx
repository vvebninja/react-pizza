import { CategoriesList } from '@/components/categories-list';
import { AppHeader } from '@/components/app-header';
import { Search } from '@/components/search';
import { Sort } from '@/components/sort';
import { PIZZA_CATEGORIES, SEARCH_QUERY_DEBOUNCE_TIME } from '@/constants/constants.ts';
import { useState } from 'react';
import styles from './home-page.module.scss';
import { PizzaList } from '@/components/pizza-list';
import { useDebounce } from '@/hooks/useDebounce';

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, SEARCH_QUERY_DEBOUNCE_TIME);
  const [selectedCategory, setSelectedCategory] = useState(PIZZA_CATEGORIES[0]);
  const [selectedSort, setSelectedSort] = useState('');
  console.log(selectedCategory);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(e.target.value);
  };

  const handleResetSearchQuery = () => setSearchQuery('');

  return (
    <div className={styles.home_page}>
      <AppHeader>
        <Search
          className={styles.search}
          value={searchQuery}
          onChange={handleSearch}
          onClick={handleResetSearchQuery}
        />
      </AppHeader>
      <div className={styles.filter_wrap}>
        <CategoriesList
          categories={PIZZA_CATEGORIES}
          selectedCategory={selectedCategory}
          onClick={handleCategoryClick}
        />
        <Sort
          value={selectedSort}
          onChange={handleSortChange}
        />
      </div>
      <PizzaList
        searchQuery={debouncedSearchQuery}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};
