import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage.component";
import Navbar from "./Components/Navbar/navbar.component"

import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar/>
        </div>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
