import React from 'react';
import { BrowserRouter as Router, 
        Route, 
        Switch } from 'react-router-dom';

/* Import css */
import './styles.css';

/* Import ROUTES */
import * as ROUTES from '../../constants/routes';

/* Import pages */
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';
import Teaching from '../Teaching';
import Contact from '../Contact';
import MyProfile from '../MyProfile';

/* Import components */
import Navigation from '../../components/Navigation';

class Home extends React.Component {

  render() {
    return (
      <div className="home">
          <Router>
              {/* NAVIGATION SIDE-BAR */}
              <Navigation />
              
              {/* RIGHT CONTAINER */}
              <div className="right-conteiner">
                {/* TOP BAR */}
                <div className="top-bar"></div>
                {/* MAIN CONTENT */}
                <div className="main-content">
                  <Switch>
                    <Route exact path={ROUTES.ABOUT} component={About} />
                    <Route exact path={ROUTES.WORK} component={Experience} />
                    <Route exact path={ROUTES.PROJECTS} component={Projects} />
                    <Route exact path={ROUTES.TEACHING} component={Teaching} />
                    <Route exact path={ROUTES.CONTACT} component={Contact} />
                    <Route exact path={ROUTES.MYPROFILE} component={MyProfile} />
                  </Switch>
                </div>
              </div>
          </Router>
      </div>
    );
  }
}

export default Home;
