import Ember from 'ember';

export default Ember.Component.extend({
  imageShowing: Ember.computed(function() {
    return true;
  }),

  actions: {
    showVideo() {
      this.set('imageShowing', false);
    }
  }
});
