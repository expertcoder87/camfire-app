`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: ()->
    @store.createRecord('attribute', {game: @modelFor('games.game')})

  resetController: (controller, isExiting, transition) ->
    if isExiting and controller.get('model.hasDirtyAttributes')
      controller.get('model').rollbackAttributes()

`export default route`
