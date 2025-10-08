import { BrowserRouter, Routes, Route } from "react-router-dom";

// import del layout
import MyLayout from './layouts/MyLayout';

import Homepage from './pages/Homepage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import Prodotto from "./pages/Prodotto";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MyLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/chiSiamo" element={<ChiSiamo />} />
          <Route path="/products" >
            <Route path="" element={<Prodotti />} />
            <Route path=":id" element={<Prodotto />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App