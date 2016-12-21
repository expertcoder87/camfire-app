`import Ember from 'ember'`


controller = Ember.Controller.extend

  navBarName: "Games"
  showPrompt: true

  actions:
    playCharacter:(characterId) ->
      if characterId == "none"
        this.transitionToRoute('games')
      else
        this.transitionToRoute('character', characterId)

    closePrompt: ->
      @set('showPrompt', false)

`export default controller`
