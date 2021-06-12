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
// @ts-ignore
import {get} from "lodash";
import * as userActions from "./store/user/actions";
import MyPage from "./pages/mypage";




function AppRoute() {

    const dispatch = useDispatch()
    const [cookie] = useCookies(['x_auth'])
    const trailToken = get(cookie,'x_auth')

    useEffect(()=>{
        // API USER AUTH 가져오기
        // dispatch(userActions.getAuthAsync.request())
        const trailToken = get(cookie,'x_auth')
        // if(trailToken !== undefined){
        //     dispatch(userActions.getAuthAsync.request({token: trailToken}))
        // }

    },[])

        return (
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    {/*<Route exact path="/main" component={MainPage}/>*/}
                    <Route exact path="/main" render={props => trailToken ? <MainPage/> : <Redirect to={{ pathname: "/"}}/> } />
                    <Route exact path="/signup" render={props => trailToken ? <Redirect to={{ pathname: "/main"}} /> : <SignUpPage/>} />
                    <Route exact path="/login" render={props => trailToken ? <Redirect to={{ pathname: "/main"}} /> : <LoginPage/>} />
                    <Route exact path="/mypage" render={props => trailToken ? <MyPage/> : <Redirect to={{ pathname: "/login"}} />} />
                    {/*<Route exact path="/profile/:id" render={props => trailToken ? <MyPage/> : <Redirect to={{ pathname: "/login"}} />} />*/}

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
