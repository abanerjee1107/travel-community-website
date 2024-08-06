import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import BlogList from './components/Blog/BlogList';
import BlogCategory from './components/Blog/BlogCategory';
import ProfilePictureUpload from './components/Profile/ProfilePictureUpload';
import SocialLinks from './components/Profile/SocialLinks';
import GoogleMapsIntegration from './components/TripPlanning/GoogleMapsIntegration';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/blogs" component={BlogList} />
                <Route path="/blog-category" component={BlogCategory} />
                <Route path="/profile-picture-upload" component={ProfilePictureUpload} />
                <Route path="/social-links" component={SocialLinks} />
                <Route path="/google-maps" component={GoogleMapsIntegration} />
            </Switch>
        </Router>
    );
};

export default App;
