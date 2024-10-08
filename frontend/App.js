import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Blog from './pages/Blog';
import FindMembers from './pages/FindMembers';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/blog" component={Blog} />
                <Route path="/find-members" component={FindMembers} />
                <Route path="/profile" component={Profile} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
