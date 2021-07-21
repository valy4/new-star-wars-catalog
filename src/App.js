import './App.css';
import FirstPage from './components/FirstPage';
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import VehiclePage from './components/Vehicles/VehiclePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route>
          <FirstPage />
        </Route>
        <Route path="/vehicle/:id">
          <VehiclePage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
