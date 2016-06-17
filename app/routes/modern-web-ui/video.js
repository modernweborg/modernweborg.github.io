import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const DATA = this.modelFor('modern-web-ui');
    const found = DATA.videos.filter(x => x.vanity === params.vanity);
    return found && found.length > 0 ? found[0] : null;
  }
});
