`import Ember from 'ember'`

controller = Ember.Controller.extend

  notify: Ember.inject.service('notify'),
  actions:
    saveRecord: ()->
      self=this
      @model.validate().then (arg)->
        if arg.validations.get('errors').length==0
          self.get('model').save().then () ->
            self.transitionToRoute('games.game.attributes')
        else
          for error in  arg.validations.get('errors')
            msg = error.get('message')
            self.get('notify').info(msg)

    goBack: ()->
      @model.unloadRecord()
      @transitionToRoute "games.game.attributes"

`export default controller`
