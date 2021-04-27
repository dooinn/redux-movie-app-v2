import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Screens/Home';
import Header from './Components/Header';
import Detail from './Screens/Detail';
import Favorite from './Screens/Favorite';
import Person from './Screens/Person';
import PopularList from './Screens/PopularList';
import TopratedList from './Screens/TopratedList';
import UpcomingList from './Screens/UpcomingList';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/popular-list" component={PopularList} />
          <Route path="/toprated-list" component={TopratedList} />
          <Route path="/upcoming-list" component={UpcomingList} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/favorites" component={Favorite} />
          <Route path="/person/:id" component={Person} />

        </Switch>
      </BrowserRouter>

    </>

  )
}

export default App
