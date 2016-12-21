`import Ember from 'ember'`

controller = Ember.Controller.extend

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
        that.transitionToRoute "games.game.skills.index"

    saveSkill: ()->
      that=this
      @model.validate().then (arg)->
        if arg.validations.get('errors').length
          for error in  arg.validations.get('errors')
            msg = error.get('message')
            that.get('notify').info(msg)
        else
          that.get('model').save().then (record)->
            that.transitionToRoute "games.game.skills.index"

    goBack: ()->
      @transitionToRoute "games.game.skills.index"

    createContext: (name) ->
      that=this
      that.set('context',@store.createRecord('context', {name:name, game: @get('model.game')}))
      that.get('context').save().then (context) ->
        that.get('contexts').pushObject(context)
        that.set('model.context',context)

`export default controller`
