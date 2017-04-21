import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'
import Dashboard from './views/Dashboard/'
import Chanels from './views/Chanels'
import addChanel from './views/addChanel'
import addCategory from './views/addCategory'
import listChanel from './views/listChanel'
import siteOptions from './views/siteOptions'
import loginComponent from './views/login'
import Category from './views/Category'
import listCategory from './views/listCategory'
export default (
  <Router history={hashHistory}>
    <Route path="/" name="Login" component={Simple}>
      <IndexRoute component={loginComponent} />
    </Route>

    <Route path="/dashboard" name="Home" component={Full}>
      <IndexRoute component={Dashboard} />


      <Route path="chanels" name="Kanallar" component={Chanels}>
        <IndexRoute component={listChanel} />
        <Route path="list" name="Kanal Listesi" component={listChanel} />
        <Route path="add" name="Kanal Ekle" component={addChanel} />
      </Route>


      <Route path="cats" name="Kategoriler" component={Category}>
        <IndexRoute component={listCategory} />
        <Route path="list" name="Kategori Listesi" component={listCategory} />
        <Route path="add" name="Kategori Ekle" component={addCategory} />
      </Route>

      <Route path="options/site" name="Site Ayarları" component={siteOptions} />

    </Route>
  </Router>
);
