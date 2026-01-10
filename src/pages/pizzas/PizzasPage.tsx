import { AppHeader } from '@/components/AppHeader';
import { CartStatusWidget } from '@/components/cart/CartStatusWidget';
import { CategoriesList } from '@/components/CategoriesList';
import { Menu } from '@/components/Menu';
import { SearchBar } from '@/components/SearchBar';
import { Sort } from '@/components/Sort';
import { PizzasPageLayout } from './PizzasPageLayout';

const PizzasPage = () => {
  return (
    <PizzasPageLayout
      header={
        <AppHeader
          variant="pizzas_page"
          cartStatusWidget={<CartStatusWidget />}
          search={<SearchBar />}
        />
      }
      categories={<CategoriesList />}
      sort={<Sort />}
      menu={<Menu />}
    />
  );
};

export const Component = PizzasPage;
