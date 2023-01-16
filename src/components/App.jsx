import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const HomeView = lazy(() => import('pages/HomeView'));
const WeatherView = lazy(() => import('pages/WeatherView'));
const Now = lazy(() => import('components/Now'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/weather" element={<WeatherView />}>
          <Route index element={<Now />} />
        </Route>
      </Route>
    </Routes>
  );
}
