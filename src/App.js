import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (<div>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Switch>
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </div>
    );
  }
}

export default App;
