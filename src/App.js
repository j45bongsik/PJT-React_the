import './_Reset.scss';
import { Route, Routes } from 'react-router-dom';
import MainRoute from './router/MainRoute'
import CoffeeRoute from './router/CoffeeRoute'
import FoodRoute from './router/FoodRoute'
import EtcRoute from './router/EtcRoute'
import NonRoute from './router/NonRoute'





function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element=
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
      </Routes>
    </div>
  );
}

export default App;
