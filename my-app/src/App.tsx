import React, { Suspense } from "react";
import style from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./components/shared/Home";


const loadingStyle = {
  textAlign: 'center',
  fontFamily: 'serif',
  fontSize: '25px',
} as React.CSSProperties;



export default function App() {
  return (
    <><div className={style.App}>
      <Router>
        <Switch>
          <Route>
            <Header />
              <Suspense fallback={<div style={loadingStyle}>Loading...</div>}>
                <Route exact path="/" component={Home} />
              </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
      </>
  );
}
