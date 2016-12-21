`import Ember from 'ember'`

controller = Ember.Controller.extend

  notify: Ember.inject.service('notify')
  worldName: ''
  description: ''
  startingXp: ''

  actions:

    createGame: (worldName, description, startingXp)->

      if startingXp < 0
        this.get('notify').info('Starting Xp must be positive')
      else if worldName and description and startingXp
        that=this
        @store.createRecord('game', {worldName, description, startingXp}).save().then (record) ->
          that.transitionToRoute "games.index"
      else if worldName is '' or worldName is null
        this.get('notify').info('Name must not be blank')
      else if description is ''
        this.get('notify').info('Description must not be blank')
      else if startingXp is ''
        this.get('notify').info('Starting XP must not be blank')

    goBack: ()->
      @transitionToRoute "games.index"

`export default controller`
