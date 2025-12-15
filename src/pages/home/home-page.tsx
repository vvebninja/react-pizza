import { AppHeader } from '@/components/app-header';
import css from './home-page.module.scss';
import { CartStatusWidget } from '@/components/cart-status-widget';
import { Search } from '@/components/search';

const HomePage = () => {
  return (
    <div className={css.home_page}>
      <AppHeader
        variant="home"
        cartStatusWidget={<CartStatusWidget />}
        search={<Search />}
      />
    </div>
  );
};

export const Component = HomePage;
