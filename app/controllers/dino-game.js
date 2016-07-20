import Ember from 'ember';

export default Ember.Controller.extend({
  dragged: [],
  actions: {
    add(dragging) {
      this.get('dragged').pushObject(dragging);
    }
  }
});
