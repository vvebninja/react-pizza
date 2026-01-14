import { createRoot } from 'react-dom/client';
import { AppRouter } from './app/AppRouter';
import './app/styles/index.scss';
import { SkeletonTheme } from 'react-loading-skeleton';

createRoot(document.getElementById('root')!).render(
  <SkeletonTheme
    baseColor="#d5d4d3"
    highlightColor="#f2f0ef"
    duration={2}
  >
    <AppRouter />
  </SkeletonTheme>,
);
