`import Ember from 'ember'`
`import DS from 'ember-data'`

controller = Ember.Controller.extend
    inventoryItems: []
    onInventoryLoad: (args)->
      self = this
      promise = new Promise((resolve, reject) ->
        reject "failed"
        return
        )
      return promise

    inventoryLabelCallback: (inventory)->
      inventory.get('name') + "    (" + inventory.get('currentCapacity') + " / " + inventory.get('capacity') + ")"

    inventoryChanged: Ember.observer('inventorySelected', ()->
      if @get('inventorySelected')
        @set('inventoryItems', @store.query('inventory-item', {inventory_id: @get('inventorySelected.id')}))
        )
        
    actions:

      itemDetail: (itemId) ->
        if itemId
          @transitionToRoute('character.inventories.item', itemId)

      createStash: ()->
        @transitionToRoute('character.createstash')

`export default controller`
