`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  navBarName: "Inventory"

  actions:

    inventoryChanged: (inventoryRecord)->
      @controllerFor('character.inventories').set('inventorySelected', inventoryRecord)

  setupController: (controller, model) ->
    @_super(controller, model)
    @controllerFor('application').get('history').pushObject(@get('routeName'))
    @controllerFor('application').set('navBarName', @navBarName)
    controller.set('model', model)
    controller.set('inventorySelected', model.filterBy('name', 'Equipped')[0])

  model: (params) ->
    @store.findRecord('character', this.paramsFor('character').id, {reload:true}).then (record)->
      record.get('inventories', { reload: true })

`export default route`
