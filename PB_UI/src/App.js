import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import InputForm from './pages/InputForm';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/inputform">
          <InputForm/>
        </Route>
        {/* <Route path="/features">
          <Features />
        </Route> */}
        {/* <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/blog-post">
          <BlogPost />
        </Route> */}
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/help">
          <Help />
        </Route> */}
        {/* <Route path="/signin">
          <SignIn />
        </Route> */}
        <Route path="/signup">
          <SignUp />
        </Route>
        {/* <Route path="/reset-password">
          <ResetPassword />
        </Route> */}
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
