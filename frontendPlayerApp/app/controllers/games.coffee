`import Ember from 'ember'`


controller = Ember.Controller.extend

  navBarName: "Games"
  showPrompt: true


  actions: 
    playGame:(gameId) ->
      if(gameId=="none")
        this.transitionToRoute('games') 
      else
        game = @store.peekRecord('game', gameId)
        if game.get('currentUserCharacterId')
          @transitionToRoute('character', game.get('currentUserCharacterId'))
        else
          this.transitionToRoute('characters',gameId)

    closePrompt: ->
      @set('showPrompt', false)

`export default controller`
