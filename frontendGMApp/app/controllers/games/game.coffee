`import Ember from 'ember'`

controller = Ember.Controller.extend

  actions:
    saveGame: (worldName, description, startingXp)->
      @model.set('wordName', worldName)
      @model.set('description', description)
      @model.set('startingXp', startingXp)
      that=this
      @model.save().then (record)->
        that.transitionToRoute "games.index"

    invitePlayers: (game)->
      @transitionToRoute "games.game.inviteplayers"

    goBack: ()->
      @transitionToRoute "games.index"

    openCharacters: ()->
      @transitionToRoute "games.game.characters.index"

    openWorld: (game)->
      @transitionToRoute "games.game.world"

    openThings: (game) ->
       @transitionToRoute "games.game.things.index"

    openStories: (game) ->
       @transitionToRoute "games.game.stories.index"

    openAttributes: (game) ->
       @transitionToRoute "games.game.attributes.index"

    openSkills: (game) ->
       @transitionToRoute "games.game.skills.index"

`export default controller`
