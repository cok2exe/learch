import React from 'react'
import { BrowserRouter as Router, Redirect, Route, RouteComponentProps, RouteProps, Switch } from 'react-router-dom'
import Login from './pages/login'
import App from './App'
import storage, { keys } from './utils/storage'

// 참고: https://eunajjing.github.io/2019/06/04/router/
type RoutePageComponent =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>

interface IPrivateRouteProps {
  page: RoutePageComponent
}

const Routes:React.FC = () => {
  const PrivateRoute:React.FC<IPrivateRouteProps & RouteProps> = ({ page: Component, ...rest }) => <Route
    {...rest}
    render={props =>
      storage.get(keys.nickname) ? (
        <Component {...props} />
      ) : <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
    }
  />

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/" page={App} />
        {/*<PrivateRoute exact path="/">*/}
        {/*  <App />*/}
        {/*</PrivateRoute>*/}
      </Switch>
    </Router>
  )
}

export default Routes