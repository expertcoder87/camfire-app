`import Ember from 'ember'`

controller = Ember.Controller.extend
  notify: Ember.inject.service('notify')

  actions:
    createUser: ()->
      @transitionToRoute "user.createuser"

    openUser: (userId)->
      @transitionToRoute "users.user", userId

`export default controller`
