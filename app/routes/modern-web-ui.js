import Ember from 'ember';
import speakers from 'modernweb/utils/speakers';
import videos from 'modernweb/utils/featuredvideo';
export default Ember.Route.extend({
	model: function() {
		return {
			speakers: speakers.filterBy('current', true),
			videos: videos
		};
	}
});
