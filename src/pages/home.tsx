import { CartButton } from '@/components/cart-button';
import { CategoriesList } from '@/components/categories';
import { Header } from '@/components/header';
import { PizzaList } from '@/components/pizza';
import { Search } from '@/components/search';
import { Sort } from '@/components/sort';
import { PIZZA_CATEGORIES } from '@/constants/constants';
import { useOrderContext } from '@/contexts/order-context';
import { mockData } from '@/mock-data';
import { FilterSection } from '@/sections/filter-section';
import { PizzaSection } from '@/sections/pizza-section';
import type { OrderedPizza, Pizza } from '@/types';
import { useState } from 'react';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(PIZZA_CATEGORIES[0]);
  const [selectedSort, setSelectedSort] = useState('');
  const [fetchedPizza] = useState<Pizza[]>(mockData);
  const { order, addOrder } = useOrderContext();

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

  const handleAddPizza = (orderedPizza: Omit<OrderedPizza, 'quantity'>) => {
    const pizzaKey = `${orderedPizza.id}-${orderedPizza.doughType}-${orderedPizza.size}`;

    const existingPizzaIndex = order.findIndex((item) => {
      const itemKey = `${item.id}-${item.doughType}-${item.size}`;
      return pizzaKey === itemKey;
    });

    if (existingPizzaIndex > -1) {
      const newOrder = order.map((item, index) => {
        if (index === existingPizzaIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      addOrder(newOrder);
    } else {
      addOrder([...order, { ...orderedPizza, quantity: 1 }]);
    }
  };

  return (
    <>
      <Header
        searchSlot={
          <Search
            value={searchQuery}
            onChange={handleSearch}
            onClick={handleResetSearchQuery}
          />
        }
        cartButtonSlot={<CartButton />}
      />
      <main>
        <FilterSection
          categories={
            <CategoriesList
              categories={PIZZA_CATEGORIES}
              selectedCategory={selectedCategory}
              onClick={handleCategoryClick}
            />
          }
          sort={
            <Sort
              value={selectedSort}
              onChange={handleSortChange}
            />
          }
        />
        <PizzaSection
          pizzaListSlot={
            <PizzaList
              pizzas={fetchedPizza}
              onClick={handleAddPizza}
            />
          }
        />
      </main>
    </>
  );
};
