const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const config = require('./config');

passport.use(new GoogleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback',
}, async (token, tokenSecret, profile, done) => {
    try {
        let user = await User.findOne({ where: { googleId: profile.id } });
        if (!user) {
            user = await User.create({
                googleId: profile.id,
                email: profile.emails[0].value,
                name: profile.displayName,
                profilePicture: profile.photos[0].value,
            });
        }
        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id);
    done(null, user);
});
