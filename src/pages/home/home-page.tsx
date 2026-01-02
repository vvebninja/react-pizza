import { AppHeader } from '@/components/app-header';
import { Search } from '@/components/search';
import { Menu } from '@/components/menu';
import { CartStatusWidget } from '@/components/cart/cart-status-widget';
import { CategoryList } from '@/components/categories';
import { HomePageLayout } from './home-page-layout';
import css from './home-page-layout.module.scss';

const HomePage = () => {
  return (
    <HomePageLayout>
      <AppHeader
        variant="home"
        cartStatusWidget={<CartStatusWidget />}
        search={<Search />}
      />
      <CategoryList className={css.categories} />
      <Menu />
    </HomePageLayout>
  );
};

export const Component = HomePage;
