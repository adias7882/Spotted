import React, { Component } from 'react'; 
import { Switch, Route} from 'react-router-dom';
import Main from './pages/index.js'

class App extends Component {
  render() {
    return(
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    );
  }
}

export default App;