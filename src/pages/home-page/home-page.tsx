import { HeaderCartButton } from '@/components/header-cart-button';
import { CategoriesList } from '@/components/categories-list';
import { AppHeader } from '@/components/app-header';
import { Search } from '@/components/search';
import { Sort } from '@/components/sort';
import { PIZZA_CATEGORIES } from '@/constants/constants.ts';
import { mockData } from '@/mock-data.ts';
import type { OrderedPizza, Pizza } from '@/types.ts';
import { useState } from 'react';
import styles from './home-page.module.scss';
import { useCartContext } from '@/contexts/cart-context/cart-context-provider';
import { PizzaList } from '@/components/pizza-list';

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(PIZZA_CATEGORIES[0]);
  const [selectedSort, setSelectedSort] = useState('');
  const [fetchedPizza] = useState<Pizza[]>(mockData);
  const { items, addItem } = useCartContext();

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

  const handleAddPizza = (pizza: Omit<OrderedPizza, 'quantity'>) => addItem(pizza);

  return (
    <>
      <AppHeader
        search={
          <Search
            value={searchQuery}
            onChange={handleSearch}
            onClick={handleResetSearchQuery}
          />
        }
        headerCartButton={<HeaderCartButton order={items} />}
      />
      <div className={styles.home_page}>
        <div>{JSON.stringify(items)}</div>
        <main>
          <div className={styles.filter_container}>
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
          <div>
            <PizzaList
              pizzas={fetchedPizza}
              onAddToCartClick={handleAddPizza}
            />
          </div>
        </main>
      </div>
    </>
  );
};
