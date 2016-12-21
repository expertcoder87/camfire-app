`import Ember from 'ember'`

controller = Ember.Controller.extend

  notify: Ember.inject.service('notify'),
  actions:
    saveRecord: ()->
      self=this
      @model.validate().then (arg)->
        if arg.validations.get('errors').length==0
          self.get('model').save().then (record) ->
            self.transitionToRoute('games.game.skills')
        else
          for error in  arg.validations.get('errors')
            msg = error.get('message')
            self.get('notify').info(msg)

    goBack: ()->
      @model.unloadRecord()
      @transitionToRoute "games.game.skills"

    createContext: (name) ->
      that=this
      that.set('context',@store.createRecord('context', {name:name, game: @get('model.game')}))
      that.get('context').save().then (context) ->
        that.get('contexts').pushObject(context)
        that.set('model.context',context)

`export default controller`
