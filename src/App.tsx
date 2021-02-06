import React from 'react';
import MainPage from "./pages/main";
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    BrowserRouter
} from 'react-router-dom'


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
      <AppRoute/>
  );
}

export default App;
