`import Ember from 'ember'`

service = Ember.Service.extend

  current_game: null

  setGame: (game) ->
    @set('current_game', game)

`export default service`
