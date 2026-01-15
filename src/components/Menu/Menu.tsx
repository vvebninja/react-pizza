import { ErrorBoundary } from '@/app/ErrorBoundary';
import { PizzaList } from '@/components/PizzaList';
import { Suspense } from 'react';
import { mutate } from 'swr';
import { PizzaListSkeleton } from '../PizzaList/PizzaListSkeleton';
import css from './Menu.module.scss';
import { usePizzaFilters } from '../PizzaList/usePizza';
import { ErrorDisplay } from '../ErrorDisplay';

export const Menu = () => {
  const filters = usePizzaFilters();
  const requesKey = Object.values(filters).toString();

  return (
    <div className={css.menu}>
      <h1 className={css.menu_title}>Menu</h1>

      <ErrorBoundary
        onReset={() => mutate(() => true, undefined, { revalidate: true })}
        FallbackComponent={(reset, error) => (
          <ErrorDisplay
            title="Failed to fetch pizza"
            error={error}
            resetErrorBoundary={reset}
          />
        )}
      >
        <Suspense
          key={requesKey}
          fallback={<PizzaListSkeleton cardItems={9} />}
        >
          <PizzaList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
