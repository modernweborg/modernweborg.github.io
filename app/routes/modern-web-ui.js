import Ember from 'ember';
import moment from 'moment';
const { get } = Ember;

export default Ember.Route.extend({
  model() {
    let videos = this.store.peekAll('post');

    videos = videos.filterBy('section', 'video');
    videos = videos.sort((a, b) => {
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

    return videos;
  }
});
