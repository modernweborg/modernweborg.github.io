import Ember from 'ember';
import speakers from 'modernweb/utils/speakers';
import videos from 'modernweb/utils/featuredvideo';
import groupsOf from 'modernweb/utils/groupsOf';
import ensureImage from 'modernweb/utils/ensureImage';

const ensureVideoURL = (video) => {
	if (video.videoURL) {
		return video;
	} else {
		return Object.assign({}, video, {
			videoURL: `https://www.youtube.com/embed/${video.id}`
		});
	}
};

export default Ember.Route.extend({
	model: function() {
		return {
			speakers: speakers.filterBy('current', true),
			videos: videos,
			grouped: groupsOf(4)(videos.map(ensureImage(ensureVideoURL)))
		};
	}
});
