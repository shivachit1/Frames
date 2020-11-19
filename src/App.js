
import './App.css';
import Frames from './component/Frames';
import Navbar from './component/Navbar';
import FrameDetails from './component/FrameDetails';
import MyCart from './component/MyCart';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h5 className="info">This is simple Test site.</h5>
      <a href="https://www.lensway.fi/silmalasit/silmalasilista"> Visit lensway to buy frames.</a>
      <Navbar/>
      <Route exact path="/" component={Frames}></Route>
      <Route exact path="/" component={FrameDetails}></Route>
      <Route exact path="/mycart" component={MyCart}></Route>
    </div>
    </Router>
  );
}

export default App;
