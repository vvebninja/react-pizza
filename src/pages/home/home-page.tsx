import { AppHeader } from '@/components/app-header';
import { CartStatusWidget } from '@/components/cart/cart-status-widget';
import { Menu } from '@/components/menu';
import { Search } from '@/components/search';
import { Sort } from '@/components/sort';
import { HomePageLayout } from './home-page-layout';
import { CategoriesList } from '@/components/categories';

const HomePage = () => {
  return (
    <HomePageLayout
      header={
        <AppHeader
          variant="home"
          cartStatusWidget={<CartStatusWidget />}
          search={<Search />}
        />
      }
      categories={<CategoriesList />}
      sort={<Sort />}
      menu={<Menu />}
    />
  );
};

export const Component = HomePage;
