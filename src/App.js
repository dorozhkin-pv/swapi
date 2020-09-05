import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { NavBar } from './components/NavBar';
import { routes } from './routes';
import { ApiState } from './context/api/ApiState';
import { CompareState } from './context/compare/CompareState';

function App() {
  const routeComponents = routes.map(route => {
    return <Route 
      key={route.path}
      path={route.path} 
      component={route.component} 
      exact={ 'exact' in route ? route.exact : true } 
    />
  });

  return (
    <ApiState>
      <CompareState>
        <BrowserRouter>
          <NavBar />
          <Container>
            <Switch>
              { routeComponents }
            </Switch>
          </Container>
        </BrowserRouter>
      </CompareState>
    </ApiState>
  );
}

export default App;
