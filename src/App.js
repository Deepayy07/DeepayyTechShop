import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import ShopContextProvider from './Context/Shop-Context';


function App() {
  return (
    <div className='App'>
    
    <ShopContextProvider>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/Cart' element={<Cart />}/>     
            </Routes>
        </Router>
    </ShopContextProvider>
       
    </div>
  )
}

export default App;
