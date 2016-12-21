`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: ()->
    @store.createRecord('thing', {game: @modelFor('games.game')})

  resetController: (controller, isExiting, transition) ->
    controller.set('fileObj', null)
    controller.set('imageSource', '')
    if isExiting and controller.get('model.hasDirtyAttributes')
      controller.get('model').rollbackAttributes()

`export default route`
