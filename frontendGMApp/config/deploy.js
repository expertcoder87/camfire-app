/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};

ENV['aws-codedeploy'] = {
    archiveType: 'zip',
    accessKeyId: 'AKIAJK3HYA3FNKTPTGTQ',
    secretAccessKey: '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',
    region: 'us-east-2',
    s3UploadOptions: {
        Bucket: 'campfire-ember-frontend',
    },
    awsDeploymentOptions: {        
        applicationName: 'campfire', //required. The name of your application as configured in Code Deploy
        deploymentGroupName: 'production',   //Name of the deployment group as configured in Code Deploy
        revision: {
          //required 'S3' || GitHub'. S3 by default. To configure GitHub depoyment, refer to documentation below.
          revisionType: 'S3', 
              
        }
    }
}