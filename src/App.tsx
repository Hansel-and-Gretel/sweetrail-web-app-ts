import React, {useEffect} from 'react';
import MainPage from './pages/main'
import {
    Switch,
    Route,
    Redirect,
    useLocation,
} from 'react-router-dom'
import {Provider, useDispatch} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {CookiesProvider, useCookies} from 'react-cookie';

import store from './store/index'
import browserHistory from './lib/history'
import LandingPage from './pages/landing'
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import * as userActions from "./store/user/actions";




function AppRoute() {

    const dispatch = useDispatch()
    const [cookie] = useCookies(['trail-token'])

    // useEffect(()=>{
    //     // API USER AUTH 가져오기
    //     // dispatch(userActions.getAuthAsync.request())
    //     const trailToken = get(cookie,'trail-token')
    //     if(trailToken !== undefined){
    //         dispatch(userActions.getAuthAsync.request({token: trailToken}))
    //     }
    //
    // },[])

        return (
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/main" component={MainPage}/>
                    <Route exact path="/signup" component={SignUpPage}/>
                    <Route exact path="/login" component={LoginPage}/>

                    {/*NOT FOUND*/}
                    <Route component={() => <Redirect to="/" />} />
                </Switch>
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
