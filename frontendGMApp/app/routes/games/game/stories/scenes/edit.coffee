`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: (params) ->
    if params.scene_id
      @store.findRecord('scene', params.scene_id)

  setupController: (controller, model)->
    @_super(controller, model)
    controller.set('imageSource', model.get('imageUrl'))

  resetController: (controller, isExiting, transition) ->
    if isExiting and controller.get('model.hasDirtyAttributes')
      controller.get('model').rollbackAttributes()

`export default route`
