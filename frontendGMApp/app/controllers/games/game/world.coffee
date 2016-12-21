`import Ember from 'ember'`

controller = Ember.Controller.extend

  notify: Ember.inject.service('notify')
  actions:
    saveGame: (worldName, description, startingXp)->
      @model.set('worldName', worldName)
      @model.set('description', description)
      @model.set('startingXp', startingXp)
      that=this
      @model.validate().then (arg)->
        if arg.validations.get('errors').length
          for error in  arg.validations.get('errors')
            msg = error.get('message')
            that.get('notify').info(msg)
        else
          that.get('model').save().then (record)->
            that.transitionToRoute "games.index"

    goBack: ()->
      @transitionToRoute "games.index"

`export default controller`
