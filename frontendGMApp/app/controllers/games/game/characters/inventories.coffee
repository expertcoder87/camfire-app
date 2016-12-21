`import Ember from 'ember'`
`import DS from 'ember-data'`

controller = Ember.Controller.extend
    inventoryItems: []
    inventoryOptions:[]

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
      addNewStash: (character)->
        if character
          @transitionToRoute "games.game.characters.createstash", character.id

      addInventoryItems: (inventorySelected)->
        if inventorySelected
          @transitionToRoute "games.game.characters.inventories.addinventoryitem", inventorySelected.id

      itemDetail: (itemId) ->
        if itemId
          @transitionToRoute('games.game.characters.inventories.item', itemId)

      createStash: ()->
        @transitionToRoute('character.createstash')

      goBack: ()->
        @transitionToRoute('games.game.characters.character', @get('model.character.id'))

      askDelete:() ->
        @set('deleteDialog', true)

      removeDeleteDialog:() ->
        @set('deleteDialog', false)

      delete: (inventorySelected) ->
        that=this
        if inventorySelected
          inventorySelected.destroyRecord().then ()=>
            that.set('deleteDialog', false)
            if this.model.inventories.filterBy('name', "Equipped").length > 0
              that.set('inventorySelected', this.model.inventories.filterBy('name', "Equipped").objectAt(0))
            else
              that.set('inventorySelected', null)

`export default controller`
