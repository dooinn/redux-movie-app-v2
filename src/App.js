import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Screens/Home';
import Header from './Components/Header';
import Detail from './Screens/Detail';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={Detail} />
        </Switch>
      </BrowserRouter>

    </>

  )
}

export default App