import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage.component";
import Navbar from "./Components/Navbar/navbar.component";
import SingleMovie from './Components/SingleMovie/SingleMovie.component';
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar/>
        </div>
        <hr />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/singleMovie/:id" component={SingleMovie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
