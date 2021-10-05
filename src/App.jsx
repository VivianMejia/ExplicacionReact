import Index from 'pages';
import LabradorInfoPage from 'pages/labrador';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 20.3K (gzipped: 7.5K)
import 'styles/styles.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/labrador'>
            <LabradorInfoPage />
          </Route>
          <Route path='/'>
            <Index/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
