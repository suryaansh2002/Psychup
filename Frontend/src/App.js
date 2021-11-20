import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Domains from "./components/Domains/Domain";
import Articles from "./components/Articles/Articles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import DomainPage from "./components/DomainPage/DomainPage";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Editor from "./components/Editor/Editor";
import SinglePost from "./components/SinglePost/SinglePost";
import { useCookies } from "react-cookie";
import AllArticles from "./components/Articles/AllArticles";
import AboutUs from "./components/AboutUs/AboutUs";
import News from "./components/News/News";

function App() {
  const [side, setSide] = useState(false);
  const [logToggle, setLogToggle] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  return (
    <div className="App">
      {side ? <div className="sidevisible"></div> : null}
      <Router>
        <NavBar
          side={side}
          setSide={setSide}
          logToggle={logToggle}
          setLogToggle={setLogToggle}
          cookie={cookie}
          removeCookie={removeCookie}
          setCookie={setCookie}
        />
        <Sidebar
          side={side}
          setSide={setSide}
          logToggle={logToggle}
          setLogToggle={setLogToggle}
          cookie={cookie}
          removeCookie={removeCookie}
          setCookie={setCookie}
        />

        <Switch>
          <Route exact path="/">
            <Home />
            <Domains />
            <AboutUs />
            <Articles />
            <Contact cookie={cookie} />
          </Route>
          <Route
            path="/editor"
            render={() =>
              cookie.user && cookie.user.editorial ? (
                <Editor
                  cookie={cookie}
                  removeCookie={removeCookie}
                  setCookie={setCookie}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/article/:id"
            exact
            component={() => (
              <SinglePost
                removeCookie={removeCookie}
                setCookie={setCookie}
                cookie={cookie}
              />
            )}
          />
          <Route path="/articles" exact component={() => <AllArticles />} />
          <Route path="/news" exact component={() => <News/>} />

          <Route
            path="/articles/:domain"
            exact
            component={() => <DomainPage />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
