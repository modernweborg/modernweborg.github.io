import Ember from 'ember';
import speakers from 'modernweb/utils/speakers';
import featuredvideo from 'modernweb/utils/featuredvideo';
export default Ember.Route.extend({
	model: function() {
		return speakers.filterBy('current', true);
	}, 
	setupController: function(controller, model){
		controller.set('speakers', model);
		controller.set('videos', featuredvideo);
	}
});
