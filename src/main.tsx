import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';
import { AppRouter } from './app/AppRouter';

createRoot(document.getElementById('root')!).render(<AppRouter />);
