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
import Team from "./components/Team/Team";
import PersonalityTest from "./components/PersonalityTest/PersonalityTest";
import PTest from "./components/PTest/PTest";
import Personalities from "./components/Personalities/Personalities";

function App() {
  const [side, setSide] = useState(false);
  const [logToggle, setLogToggle] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  return (
    <>
  <div className="app-landscape">
  <div className="land">Kindly tilt the screen or use a device of a larger height to enjoy the best site experience</div>
  </div>
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
        {/* <Sidebar
          side={side}
          setSide={setSide}
          logToggle={logToggle}
          setLogToggle={setLogToggle}
          cookie={cookie}
          removeCookie={removeCookie}
          setCookie={setCookie}
        /> */}

        <Switch>
          <Route exact path="/">
            <Home
              side={side}
              setSide={setSide}
              logToggle={logToggle}
              setLogToggle={setLogToggle}
              cookie={cookie}
              removeCookie={removeCookie}
              setCookie={setCookie}
            />
            <PTest />
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
            path="/article/:id/:name"
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
          <Route
            path="/personality"
            exact
            component={() => <PersonalityTest />}
          />

          <Route
            path="/articles/:domain"
            exact
            component={() => <DomainPage />}
          />
          <Route
            path="/personalities/:type"
            exact
            component={() => <Personalities />}
          />
          <Route path="/team" exact component={() => <Team />} />
        </Switch>
        <Footer />
      </Router>
    </div>
    </>

  );
}

export default App;
