import './_Reset.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoute from './router/MainRoute'
import CoffeeRoute from './router/CoffeeRoute'
import FoodRoute from './router/FoodRoute'
import EtcRoute from './router/EtcRoute'
import NonRoute from './router/NonRoute'
import Detail from './components/contents/_CardDetail'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element=
            {
              <MainRoute />
            }
          ></Route>
          <Route path="/coffee/*" element=
            {
              <CoffeeRoute />
            }
          ></Route>
          <Route path="/food/*" element=
            {
              <FoodRoute />
            }
          ></Route>
          <Route path="/etc/*" element=
            {
              <EtcRoute />
            }
          ></Route>
          <Route path="*" element=
            {
              <NonRoute />
            }
          ></Route>

          <Route path="/detail/:id" element=
            {
              <Detail />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
