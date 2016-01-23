import Ember from 'ember';

export default Ember.Component.extend({
  actionSendMessage: 'sendMessage',

  didInsertElement: function() {
    var _this = this;

    this.$('textarea').keyup(function(e) {
      if ( e.which == 13 ) {
        _this.sendAction('actionSendMessage', _this.get('message'));
      }
    });
  },

  actions: {
    sendMessage: function(message) {
      this.sendAction('actionSendMessage', message);
    }
  }
});
