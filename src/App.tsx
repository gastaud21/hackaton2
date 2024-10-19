import AddCard from './componente/add_card/AddCard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './componente/carrinho/Cart.tsx'

function App() {
  return (
    <Router>
      {/* <Navigation /> */}
      <Routes>

          {/* <AddCard /> */}
          <Route path="/Cart"  Component={Cart} />
          <Route path="/"  Component={AddCard} />

       
      </Routes>
    </Router>
  );

}

export default App