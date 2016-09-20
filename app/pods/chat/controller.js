import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendMessage: function(message) {
      if (message) {
        var newMessage = this.store.createRecord('message');
        newMessage.set('user', this.get('model.currentUser'));
        newMessage.set('body', message);
        newMessage.set('created', new Date());
        newMessage.save()
        .then( ()=> {
          this.set('message', '');
          Ember.$('.chat-history').animate({
            scrollTop: 2000000
          }, 500);
        });
      }
    }
  }
});
