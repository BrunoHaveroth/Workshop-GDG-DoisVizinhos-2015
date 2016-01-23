import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Controller.extend({
  actions: {
    register: function(){
      var name = this.get('model.name');
      var email = this.get('model.email');
      var password = this.get('model.password');
      var ref = new Firebase("https://ember-firebase-gdg.firebaseio.com/");
      var _this = this;

      ref.createUser({
        email    : email,
        password : password
      }, function(error, userData){
        if (error) {
          alert(error);
        } else {
          _this.store.createRecord('user', {
            email: email,
            name: name,
            id: userData.uid
          }).save()
          .then(function(saved) {
            _this.get('session').authenticate('authenticator:firebase', {
              'email': email,
              'password': password
            }).then(function() {
              _this.transitionToRoute('chat');
            });
          });
        }
      });
    }
  }
});
