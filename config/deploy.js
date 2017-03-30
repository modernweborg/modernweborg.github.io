/* jshint node: true */

module.exports = function() {
  return {
    'gcloud': {
      bucket: 'moderndotweb',
      key: 'fastboot-release.json'
    },
    'gcloud-storage': {
      projectId: 'this-dot',
      bucket: 'moderndotweb',
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,json}',
      metadata: {
        cacheControl: 'public, max-age=31536000'
      }
    }
  };
};