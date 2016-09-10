import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Component.extend({
  store: injectService(),
  firstName: null,
  lastName: null,
  email: null,
  actions: {
    submit() {
      let firstName = this.get('firstName');
      let lastName = this.get('lastName');
      let email = this.get('email');
      let newStickerRequest = this.get('store').createRecord('sticker-requests');
      newStickerRequest.set('firstName', firstName);
      newStickerRequest.set('lastName', lastName);
      newStickerRequest.set('email', email);
      newStickerRequest.save();
    }
  }
});
