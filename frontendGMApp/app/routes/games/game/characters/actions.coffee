`import Ember from "ember"`

route = Ember.Route.extend

  setupController: (controller, model) ->
    @_super(controller, model)
    controller.set('model', model)

  model: (params)->
    Ember.RSVP.hash(
      character: @store.findRecord('character', params.character_id)
      actions: @store.query('action', {character_id: params.character_id})
      contexts: @store.query('context', {character_id: params.character_id})
      )

`export default route`
