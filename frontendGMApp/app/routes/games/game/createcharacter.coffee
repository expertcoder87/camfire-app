`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: ()->
    @store.createRecord('character', {game: @modelFor('games.game')})

  resetController: (controller, isExiting, transition) ->
    if isExiting and controller.get('model.hasDirtyAttributes')
      if controller.get('model.id') is null
        controller.get('model').destroy()

`export default route`
