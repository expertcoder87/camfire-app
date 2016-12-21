`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  game_id:null

  beforeModel:(params) ->
    @set('game_id', @paramsFor('games.game').id)

  model: (params) ->
    if params.item_id
      Ember.RSVP.hash(
        inventory_item: @store.findRecord('inventory-item', params.item_id, {reload:true}),
        characters: @store.findRecord('game', @get('game_id')). then (record) ->
          record.get('characters')
        )

  afterModel: (model, transition)->
    @set('game_id', null)

  setupController: (controller, model) ->
    @_super(controller, model)
    controller.set('currentCharacter', model.inventory_item.get('inventory').get('character'))
    controller.set('characterInventories', controller.get('currentCharacter').get('inventories'))
    controller.set('moveQuantity', null)
    controller.set('giveQuantity', null)
    controller.set('character', null)
    controller.set('inventorySelected', null)
    controller.set('discardQuantity', null)
    controller.set('characterInventories', controller.get('characterInventories').filter(
      (arg) ->
          arg.get('id')!=model.inventory_item.get('inventory').get('id')))
    controller.set('characters',model.characters.filter(
      (arg) ->
          arg.get('id')!=controller.get('currentCharacter').get('id')
        ))
`export default route`
