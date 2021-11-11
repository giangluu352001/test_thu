import './App.css';
import LoginSignUp from './component/Login/LoginSignUp';
import AllProductsPage from "./component/DisplayProduct/AllProductsPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Cart from "./component/Cart/Cart"
import store from "./store"
import { Provider } from "react-redux"
function App() {
  return (
    <Provider store={store}>
      <Router>
      <Switch>
        <Route exact path="/" component={AllProductsPage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={LoginSignUp} />
      </Switch>
    </Router> 
  </Provider>
  );
}

export default App;
