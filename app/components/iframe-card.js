import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  hasClicked: false,

  iframeURL: Ember.computed('model.mediaId', 'model.kind', function() {
    switch (this.get('model.kind')) {
      case 'youtube':
        return 'https://www.youtube.com/embed/' + this.get('model.mediaId') + '?rel=0&autoplay=1';

      case 'podbean':
        return 'https://www.podbean.com/media/player/' + this.get('model.mediaId') + '?skin=109&auto=1';

      default:
        throw new Error('Unknown model type: ' + this.get('model.kind'));
    }
  }),

  imageURL: Ember.computed('model.imageUrl', 'model.mediaId', function() {
    var imageURL = this.get('model.imageUrl');

    if (!imageURL) {
      imageURL = 'http://img.youtube.com/vi/' + this.get('mediaId.id') + '/hqdefault.jpg';
    }

    return imageURL;
  })
});
