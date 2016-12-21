`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model:(params) ->
    @store.peekRecord('game', params.game_id).get('characters')

  renderTemplate:(controller, model)->
    @render 'games.characters'

`export default route`
