import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Screens/Home';
import Header from './Components/Header';
import Detail from './Screens/Detail';
import Favorite from './Screens/Favorite';
import Person from './Screens/Person';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/person/:id" component={Person} />

        </Switch>
      </BrowserRouter>

    </>

  )
}

export default App
