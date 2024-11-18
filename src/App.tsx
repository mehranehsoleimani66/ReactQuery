import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../src/Pages/Home';
import AboutPage from './Pages/About';
import queryClientStore from './store';

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClientStore}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
