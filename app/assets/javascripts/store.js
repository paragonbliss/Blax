Blax.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

Blax.User = DS.Model.extend({
	userName: DS.attr('string')
});

Blax.User.FIXTURES = [
	{ id: 1, userName: "Michael" }
];