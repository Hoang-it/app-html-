import './App.css';
import 'antd/dist/antd.min.css';
import About from './containers/About';
import LandingPage from './containers/LandingPage';
import ViewProduct from './containers/ViewProduct';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage  />} />
      <Route path='/about' element={<About />} />
      <Route path='/view-product' element={<ViewProduct />} />
    </Routes>
  );
}

export default App;
