import { Route, Routes } from 'react-router';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>

      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
