import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Pokedex from './Pokedex.js';
import PokemonDetail from './PokemonDetail.js';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pokedex />,
    },
    {
      path: "/pokemon/:id",
      element: <PokemonDetail />,
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;