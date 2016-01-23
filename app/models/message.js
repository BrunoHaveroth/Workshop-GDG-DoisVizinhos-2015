import DS from 'ember-data';

export default DS.Model.extend({
  user      : DS.belongsTo('user'),
  body      : DS.attr('string'),
  created   : DS.attr('date'),

  isMyMessage: function () {
    var ctrl = this.container.lookup('controller:application');
    var currentUserId = ctrl.get('session.secure.auth.uid');
    return currentUserId === this.get('user.id') ? true : false;
  }.property('user')
});
