import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addSignup: function () {
			var newSignup = this.store.createRecord (
				'sign-up', {
					firstName: this.get ('firstName'),
					lastName: this.get ('lastName'),
					email: this.get ('email')
				});
			newSignup.save();
				this.setProperties ({
					firstName: '',
					lastName: '',
					email: ''
				});
		}
	}
});
