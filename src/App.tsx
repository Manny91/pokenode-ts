import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PokemonList from "./pokedex-module/pages/PokemonList/PokemonListContainer";
import PokemonDetail from "./pokedex-module/pages/PokemonDetail/PokemonDetailContainer";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<PokemonDetail />}></Route>
          <Route path="/" element={<PokemonList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
