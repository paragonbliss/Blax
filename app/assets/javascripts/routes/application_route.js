Blax.ApplicationRoute = Ember.Route.extend({
	model: function() {
		return Blax.User.find();
	}
});
