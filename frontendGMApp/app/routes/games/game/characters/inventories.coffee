`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  setupController: (controller, model)->
    @_super(controller, model)
    controller.set('inventorySelected', model.inventories.filterBy('name', 'Equipped')[0])


  model: (params) ->
    if params.character_id
      Ember.RSVP.hash (
        inventories: @store.findRecord('character', params.character_id).then (record) ->
            record.get('inventories')
        character: @store.findRecord('character', params.character_id).then (record) ->
          record)
    else
      @store.findRecord('character', @modelFor('games.game.characters.character').id).get('inventories')

  resetController: (controller, isExiting, transition) ->
    if isExiting and controller.get('model.hasDirtyAttributes')
      controller.get('model').rollbackAttributes()

`export default route`
