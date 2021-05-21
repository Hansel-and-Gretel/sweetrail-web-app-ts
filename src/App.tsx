import React from 'react';
import MainPage from './pages/main'
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    BrowserRouter
} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'

import store from './store/index'
import browserHistory from './lib/history'
import LandingPage from './pages/landing'
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";


function AppRoute() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/main" component={MainPage}/>
                    <Route exact path="/signup" component={SignUpPage}/>
                    <Route exact path="/login" component={LoginPage}/>

                    {/*NOT FOUND*/}
                    <Route component={() => <Redirect to="/" />} />
                </Switch>
            </BrowserRouter>
        )
}


function App() {
  return (
      <>
          <Provider store={store}>
              <ConnectedRouter history={browserHistory}>
                  <AppRoute/>
              </ConnectedRouter>
          </Provider>
      </>
  );
}

export default App;
