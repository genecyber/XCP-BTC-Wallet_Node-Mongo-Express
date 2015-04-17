
/*!
 * Module dependencies.
 */

var fs = require('fs');
var env = {};
var envFile = __dirname + '/env.json';

// Read env.json file, if it exists, load the id's and secrets from that
// Note that this is only in the development env
// it is not safe to store id's in files

if (fs.existsSync(envFile)) {
  env = fs.readFileSync(envFile, 'utf-8');
  env = JSON.parse(env);
  Object.keys(env).forEach(function (key) {
    process.env[key] = env[key];
  });
}

/**
 * Expose
 */

module.exports = {
  db: 'mongodb://localhost/noobjs_dev',
  facebook: {
    clientID: process.env.FACEBOOK_CLIENTID || "123",
    clientSecret: process.env.FACEBOOK_SECRET || "123",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  twitter: {
    clientID: process.env.TWITTER_CLIENTID || "123",
    clientSecret: process.env.TWITTER_SECRET || "123",
    callbackURL: "http://localhost:3000/auth/twitter/callback"
  },
  github: {
    clientID: process.env.GITHUB_CLIENTID || "123",
    clientSecret: process.env.GITHUB_SECRET || "123",
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_CLIENTID || "123",
    clientSecret: process.env.LINKEDIN_SECRET || "123",
    callbackURL: 'http://localhost:3000/auth/linkedin/callback'
  },
  google: {
    clientID: process.env.GOOGLE_CLIENTID || "123",
    clientSecret: process.env.GOOGLE_SECRET || "123",
    callbackURL: "http://localhost:3000/auth/google/callback"
  }
};
