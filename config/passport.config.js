JWTStrategy = require('passport-jwt').Strategy,
ExtractJWT = require('passport-jwt').ExtractJwt;
const jwtIssuer = require('./jwtIssuer.controller')
var opts = {}

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secret = 'speedgoals-thegeekshubproject'; //TO BE PUT IN ENV VARIABLES
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : opts.secret
},
function (jwtPayload, done) {
    User.findOne({ _id: jwtPayload.uid}, (err, user) => {
        if (err) {
            done(err, null) ;
        } 
        if (user){
            return done(null, user)
        } else {
            return done('Unauthorized',null)
        }
    })

}
));
