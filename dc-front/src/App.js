import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Product from './pages/product/Product';
import Home from './pages/home/Home';
import Ourpeople from '../src/pages/ourpeople/Ourpeople';
import About from '../src/pages/about/About';
import Contact from '../src/pages/contact/Contact';
import Ourwork from '../src/pages/ourwork/Ourwork';
import Publication from '../src/pages/publication/Publication';
import Detail from '../src/pages/detail/Detail';
import NotFound from '../src/components/pageNotFound';

function App() {
  return (
    <main>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/index/home" component={Home} />
          <Route path="/index/product" component={Product} exact />
          <Route path="/index/ourpeople" component={Ourpeople} exact />
          <Route path="/index/detail/:id" component={Detail} exact />
          <Route path="/index/about" component={About} exact />
          <Route path="/index/contact" component={Contact} exact />
          <Route path="/index/publication" component={Publication} exact />
          <Route path="/index/ourwork" component={Ourwork} exact />
          <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
