import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage.component";
import Navbar from "./Components/Navbar/navbar.component";
import SingleMovie from './Components/SingleMovie/SingleMovie.component';
import myListPage from "./Components/MyList/myList.component";
import "./App.css";
import SearchResults from "./Components/SearchResults/SearchResults.component";



function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar/>
        </div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search/:query" component={SearchResults}/>
          <Route exact path="/singleMovie/:id" component={SingleMovie} />
          <Route exact path='/myList' component={myListPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
