import React from 'react';
import { Switch,  Route } from 'react-router-dom';

import Layout from './highOrderComponent/layout';
import Home from './components/home/index';
import RegisterLogin from './components/register_login/index';

const Routes = () =>{
  return(
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register_login" exact component={RegisterLogin} />
      </Switch>
    </Layout>
  )
}

export default Routes;
