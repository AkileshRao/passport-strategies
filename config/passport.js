const { compareSync } = require('bcrypt');
const passport = require('passport')
const UserModel = require('./database')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "644910442364-1cgg123olo61b21kmur092eptbk5se6g.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:5000/auth/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(accessToken, profile);
        UserModel.findOne({ googleId: profile.id }, (err, user) => {
            if (err) return cb(err, null);
            if (!user) {
                let newUser = new UserModel({
                    googleId: profile.id,
                    name: profile.displayName
                })

                newUser.save();
                return cb(null, newUser);
            } else {
                return cb(null, user)
            }
        })
    }
));

//Persists user data inside session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

//Fetches session details using session id
passport.deserializeUser(function (id, done) {
    UserModel.findById(id, function (err, user) {
        done(err, user);
    });
});