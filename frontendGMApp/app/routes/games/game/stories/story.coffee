`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: (params)->
    @store.findRecord('story', params.story_id).then (record)->
      record

  resetController: (controller, isExiting, transition) ->
    if isExiting and controller.get('model.hasDirtyAttributes')
      controller.get('model').rollbackAttributes()

`export default route`
