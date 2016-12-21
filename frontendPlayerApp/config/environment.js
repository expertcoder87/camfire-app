/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    //coffeeOptions: {
     //blueprints: false
    //},
    modulePrefix: 'frontend-upgrade',
    environment: environment,
    rootURL: '',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      HOST: ""
    },

    fastboot:{
      hostWhitelist: ["localhost", /^localhost:\d+$/ ]
    }
  };

  if (environment === 'development') {
    ENV.APP.HOST = "http://52.27.156.129:3000" //"http://192.168.3.29:4200"
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.FAYE_URL = "http://52.27.156.129";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    //ENV.baseURL = 'android/www/';
    ENV.locationType = 'hash';
    ENV.APP.HOST = "http://52.27.156.129:3000"
  }

  return ENV;
};
