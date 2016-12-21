`import Ember from "ember"`

route = Ember.Route.extend

  setupController: (controller, model)->
    @_super(controller, model)
    controller.set('options', [model.skills.toArray()..., model.attributes.toArray()...])
  model: (params)->

    Ember.RSVP.hash(
      character: @store.findRecord('character', params.character_id).then (record) ->
        record
      skills: @store.query('skill', {character_id:params.character_id}).then (record) ->
        record
      attributes: @store.query('attribute', {character_id:params.character_id}).then (record) ->
        record
      )

  resetController: (controller, isExiting, transition) ->
    controller.set('actionSelected', null)
    controller.set('levelSelected', null)
    if isExiting and controller.get('model.hasDirtyAttributes')
      controller.set('fileObj', '')
      controller.get('model').rollbackAttributes()

`export default route`
