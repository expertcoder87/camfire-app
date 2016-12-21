`import Ember from 'ember'`

controller = Ember.Controller.extend
  appController: Ember.inject.controller('application')
  notify: Ember.inject.service('notify')
  deleteDialog: false

  actions:

    askDelete:() ->
      @set('deleteDialog', true)

    removeDeleteDialog:() ->
      @set('deleteDialog', false)

    delete: ()->
      that=this
      @model.destroyRecord().then ()->
        that.set('deleteDialog', false)
        that.transitionToRoute "games.game.attributes.index"

    saveAttribute: ()->
      that=this
      @model.validate().then (arg)->
        if arg.validations.get('errors').length
          for error in  arg.validations.get('errors')
            msg = error.get('message')
            that.get('notify').info(msg)
        else
          that.get('appController').set('loading',true)
          that.get('model').save().then (record)->
            that.get('appController').set('loading',true)
            that.transitionToRoute "games.game.attributes.index"

    goBack: ()->
      @transitionToRoute "games.game.attributes.index"

`export default controller`
