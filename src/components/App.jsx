import { Lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { Gallery } from './Gallery';
// import { SubBreeds } from './SubBreeds';

const Home = Lazy(() => import('../pages/Home'));
const Dogs = Lazy(() => import('../pages/Dogs'));
const DogDetails = Lazy(() => import('../pages/DogDetails'));
const Gallery = Lazy(() =>
  import('./Gallery').then(module => ({
    ...module,
    default: module.Gallery,
  }))
);
const SubBreeds = Lazy(() =>
  import('./SubBreeds').then(module => ({
    ...module,
    default: module.SubBreeds,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<SubBreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
