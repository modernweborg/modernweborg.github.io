import Ember from 'ember';
const { RSVP: { hash } } = Ember;

export default Ember.Route.extend({
  model() {
    return hash({
      posts: this.store.findAll('post'),
      authors: this.store.findAll('author')
    });
  }
});
