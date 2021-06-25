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
import JourneyDetailPage from "./pages/journey";
import MapPage from "./pages/map";
import Profile from "./pages/profile";
import MyPageEdit from "./pages/mypage/edit";
import ExplorePage from "./pages/explore";
import PlacePage from "./pages/place";
import RecommendPage from "./pages/recommendation";




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
                    <Route exact path="/main" render={props => trailToken ? <MainPage/> : <Redirect to={{ pathname: "/login"}}/> } />
                    <Route exact path="/signup" render={props => trailToken ? <Redirect to={{ pathname: "/main"}} /> : <SignUpPage/>} />
                    <Route exact path="/login" render={props => trailToken ? <Redirect to={{ pathname: "/main"}} /> : <LoginPage/>} />
                    <Route exact path="/mypage" render={props => trailToken ? <MyPage/> : <Redirect to={{ pathname: "/login"}} />} />
                    <Route exact path="/mypage-edit" render={props => trailToken ? <MyPageEdit/> : <Redirect to={{ pathname: "/login"}} />} />
                    <Route exact path="/profile/:id" render={props => trailToken ? <Profile/> : <Redirect to={{ pathname: "/login"}} />} />
                    <Route exact path="/journey/detail/:id" component={JourneyDetailPage} />
                    <Route exact path="/place/:id" component={PlacePage} />
                    <Route exact path="/explore" component={ExplorePage} />
                    <Route exact path="/recommendation" component={RecommendPage} />
                    <Route exact path="/map/:id" component={MapPage} />
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
