`import Ember from "ember"`

route = Ember.Route.extend

  model: (params)->
    that=@
    @store.findRecord('story', params.story_id).then (record) ->
      that.store.createRecord('scene', {story: record})

  resetController: (controller, isExiting, transition) ->
    if isExiting and controller.get('model.hasDirtyAttributes')
      controller.get('model').rollbackAttributes()

`export default route`
