import Ember from 'ember';
import moment from 'moment';
const { get } = Ember;

export default Ember.Route.extend({
  model() {
    let podcasts = this.store.peekAll('post');

    podcasts = podcasts.filterBy('section', 'podcast');
    podcasts = podcasts.sort((a, b) => {
      let dateA = moment(get(a, 'date'));
      let dateB = moment(get(b, 'date'));
      if (dateA.isBefore(dateB)) {
        return 1;
      }
      if (dateA.isAfter(dateB)) {
        return -1;
      }
      return 0;
    });

    return podcasts;
  }
});
