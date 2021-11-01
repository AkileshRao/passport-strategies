const passport = require('passport')
const JWTStrategy = require('passport-jwt').Strategy;

passport.use(new JWTStrategy())