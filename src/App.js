import './_Reset.scss';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import MainRoute from './router/MainRoute'
import CoffeeRoute from './router/CoffeeRoute'
import FoodRoute from './router/FoodRoute'
import EtcRoute from './router/EtcRoute'
import NonRoute from './router/NonRoute'
import Detail from './components/contents/_CardDetail'
import Header from './components/header/Header';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        

        <Routes>
          
          <Route element={ <Header /> }>

            <Route path="/" element={ <MainRoute /> } />
            <Route path="/coffee/*" element={ <CoffeeRoute /> } />
            <Route path="/food/*" element={ <FoodRoute /> } />
            <Route path="/etc/*" element={ <EtcRoute /> } />
          </Route>
          <Route path="/detail/:id" element={ <Detail /> } />


          <Route path="*" element={ <NonRoute /> } />
        </Routes>

      </BrowserRouter>

      
    </div>
  );
}

export default App;
