import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      users: this.store.find('user'),
      currentUser: this.store.find('user', this.get('session.secure.auth.uid')),
      messages: this.store.find('message')
    });
  }
});
