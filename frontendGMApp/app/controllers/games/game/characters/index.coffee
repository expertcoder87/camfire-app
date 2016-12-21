`import Ember from 'ember'`

controller = Ember.Controller.extend
  actions:
    openCharacter: (character)->
      @transitionToRoute "games.game.characters.character", character

    createCharacter: ()->
      @transitionToRoute "games.game.createcharacter"  

`export default controller`
