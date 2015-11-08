import Ember from 'ember';
import speakers from 'modernweb/utils/speakers';
export default Ember.Route.extend({
	model: function() {
		return speakers.filterBy('current', true);
	}
});
