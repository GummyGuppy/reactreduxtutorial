import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductComponent'

function App() {
  return (
    <div className="App">
      <div>test</div>
      <Header/>
      <Router>
        
        <Switch>
          <Route path='/' exact component={ProductListing}/>
          <Route path='/product/:productId' component={ProductDetails}/>
          <Route>404 not found</Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
