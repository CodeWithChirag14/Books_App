import { Routes,Route } from 'react-router-dom';
import Booklist from './components/Booklist';
import Favorites from './components/Favorites';
import Bookdetails from './components/Bookdetails'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path="/" element={<Booklist/>} />
        <Route path="/books/:id" element={<Bookdetails/>}/>
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
      <Footer/>
  
    </div>
  );
}

export default App;
