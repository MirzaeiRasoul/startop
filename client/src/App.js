import React from 'react';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Contact, About, Search, Login, Profile, NotFound } from './pages';
import { Header, Footer, CsrfManager, AuthManager } from './components';
import './assets/css/common.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className='container'>
          <div className='background' />
          <div className='background-cover' />
          <Header />
          <CsrfManager>
            <AuthManager>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/search' component={Search} />
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile} />
                <Route component={NotFound} />
              </Switch>
            </AuthManager>
          </CsrfManager>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
