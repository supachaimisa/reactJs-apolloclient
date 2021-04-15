import logo from './logo.svg';
import { Link , Switch , BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import Head from './components/head';
import Main from './views/main';
import Product from './views/product';
function App() {
  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <Router>
      <Head/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/product">
          <Product/>
        </Route>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
