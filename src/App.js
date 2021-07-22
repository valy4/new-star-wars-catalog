import "./App.css";
import FirstPage from "./components/FirstPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VehiclePage from "./components/Vehicles/VehiclePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/vehicle/:id">
            <VehiclePage />
          </Route>
          <Route exact path="/">
            <FirstPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
