import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  hasClicked: false,

  descriptionParagraphs: Ember.computed('model.description', function() {
    var description = this.get('model.description');
    if (description && description.length) {
      return description.split('\n');
    } else {
      return [];
    }
  }),

  iframeURL: Ember.computed('model.id', 'model.type', function() {
    switch (this.get('model.type')) {
      case 'youtube':
        return 'https://www.youtube.com/embed/' + this.get('model.id') + '?rel=0&autoplay=1';
      default:
        throw new Error('Unknown model type: ' + this.get('model.type'));
    }
  }),

  imageURL: Ember.computed('model.imageURL', 'model.id', function() {
    var imageURL = this.get('model.imageURL');

    if (!imageURL) {
      imageURL = 'http://img.youtube.com/vi/' + this.get('model.id') + '/hqdefault.jpg';
    }

    return imageURL;
  })
});
