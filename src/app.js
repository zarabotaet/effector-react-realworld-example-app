import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useStore } from 'effector-react';

// import Article from './components/Article';
// import Editor from './components/Editor';
import { Home } from './home';
import { Header } from './header';
import { SignIn } from './auth/sign-in';
import { SignUp } from './auth/sign-up';
import { Settings } from './settings';
// import { Profile } from './components/Profile';
// import ProfileFavorites from './components/ProfileFavorites';

import { asyncGetUser } from './auth/model';

export const App = () => {
  const isLoading = useStore(asyncGetUser.pending);

  useEffect(() => {
    asyncGetUser();
  }, []);

  return isLoading ? (
    <Header />
  ) : (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/settings" component={Settings} />
        {/* <Route path="/@:username" component={Profile} /> */}
        {/* <Route path="/editor/:slug" component={Editor} />
        <Route path="/editor" component={Editor} />
        <Route path="/article/:id" component={Article} />
        <Route path="/@:username/favorites" component={ProfileFavorites} /> */}
      </Switch>
    </>
  );
};