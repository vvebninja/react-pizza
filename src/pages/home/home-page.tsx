import { AppHeader } from '@/components/app-header';
import css from './home-page.module.scss';
import { CartStatusWidget } from '@/components/cart-status-widget';
import { Search } from '@/components/search';
import { Menu } from '@/components/menu';

const HomePage = () => {
  return (
    <div className={css.home}>
      <AppHeader
        variant="home"
        cartStatusWidget={<CartStatusWidget />}
        search={<Search />}
      />
      <Menu />
    </div>
  );
};

export const Component = HomePage;
