import { AppHeader } from '@/components/AppHeader';
import { CartStatusWidget } from '@/components/cart/CartStatusWidget';
import { CategoriesList } from '@/components/CategoriesList';
import { Menu } from '@/components/Menu';
import { SearchBar } from '@/components/SearchBar';
import { Sort } from '@/components/Sort';
import { HomePageLayout } from './homePageLayout';

const HomePage = () => {
  return (
    <HomePageLayout
      header={
        <AppHeader
          variant="home"
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

export const Component = HomePage;
