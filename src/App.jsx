import { getDefaultNormalizer } from '@testing-library/dom';
import Index from 'pages';
import Linda from 'pages/Linda';
import LabradorInfoPage from 'pages/labrador';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import Layout from 'layouts/Layout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
            <Route path='/labrador'>
              <LabradorInfoPage />
            </Route>
            <Route path='/linda'>
              <linda/>
            </Route>
            <Route path='/'>
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
