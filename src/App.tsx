import React from 'react';
import MainPage from "./pages/main";
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


function AppRoute() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
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
