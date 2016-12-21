`import Ember from 'ember'`

controller = Ember.Controller.extend
  notify: Ember.inject.service('notify')

  actions:
    createGame: ()->
      @transitionToRoute "games.creategame"

    openGame: (gameId)->
      @transitionToRoute "games.game", gameId
      @transitionToRoute "games.game.world"

    shareGame: (game)->
      game.set('sharedToMarket', true)
      game.save().then (record)=>
        @get('notify').alert("Success!! Game shared to marketplace.")
        record
`export default controller`
