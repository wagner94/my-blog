import React from 'react';
import  Navigation  from './components/common/navigation';
import  Footer  from './components/common/footer';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageRenderer from './page-renderer'

function App() {

  const user = {
   firstName: 'Efraim',
   lastName: 'Van Deer'
  }

  return (
    <Router>
      <div className="App">
        <Navigation user ={user}/>

        <Switch>
             <Route path="/:page" component={PageRenderer} />
             <Route path="/" render ={() => <Redirect to="/home" />} />
             <Route component = {() => 404} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
