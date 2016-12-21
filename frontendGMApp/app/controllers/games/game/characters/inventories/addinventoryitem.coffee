`import Ember from 'ember'`

controller = Ember.Controller.extend
    appController: Ember.inject.controller('application')
    inventoryController : Ember.inject.controller('games.game.characters.inventories'),

    itemLabelCallback: (inventory)->
        inventory.get('name')

    actions:
      goBack: ()->
        @transitionToRoute "games.game.characters.inventories"

      addItem: (item, quantity)->
        that=this
        if item and quantity
          that.get('appController').set('loading',true)
          @store.createRecord('inventory-item', {quantity:quantity, inventory: @model.inventory, thing:item}).save().then (record)=>
            that.set('itemSelected', null)
            that.set('quantity', null)
            inventorySelected=that.get('inventoryController.inventorySelected.id')
            @store.queryRecord('inventory', {ids: inventorySelected}).then (record) ->
              that.get('inventoryController').set('inventorySelected', null)
              Ember.run.next ->
                that.get('inventoryController').set('inventorySelected', record)
              that.get('appController').set('loading',false)
              that.transitionToRoute ('games.game.characters.inventories')
`export default controller`
