`import Ember from 'ember'`
`import constants from "frontend-upgrade/utils/constants"`
`import ajax from "frontend-upgrade/helpers/ajax"`


controller = Ember.Controller.extend

  inventories: Ember.inject.controller('games.game.characters.inventories')

  navBarName: "Item"
  giveView: false
  discardView: false
  moveView: false
  characterInventories:[]
  disabledButton: false
  disabledButton1: false

  getItemLabelCallback: (args) ->
    args.get('name')

  moveQuantityChanged: Ember.observer('moveQuantity', ()->
    if @get('moveQuantity') > this.get('model').inventory_item.get('quantity')
      @set('disabledButton', true)
    else
      @set('disabledButton', false)
      )

  giveQuantityChanged: Ember.observer('giveQuantity', ()->
    if @get('giveQuantity') > this.get('model').inventory_item.get('quantity')
      @set('disabledButton1', true)
    else
      @set('disabledButton1', false)
      )

  goToInventories: ()->
    @replaceRoute "games.game.characters.inventories"

  updateInventories: (character)->
    self = this
    inventoryIds = character.get('inventories').toArray().map (inv) ->
      inv.get("id")
    selectedInvId = self.get('inventories.inventorySelected.id')
    @get('inventories').set('inventorySelected', null)
    @store.query('inventory', {ids: inventoryIds}).then (record) ->
      Ember.run.next ->
        self.get('inventories').set('inventorySelected', record.findBy('id', selectedInvId))



  actions:
    discardItem: (quantity, item)->
      that=this
      if quantity >= 1 and quantity <= item.get('quantity')
        character = item.get('inventory.character')
        if `quantity == item.get('quantity')`
            item.destroyRecord().then ()->
              that.updateInventories(character)
              that.transitionToRoute ('games.game.characters.inventories')
        else
          currentQuantity = item.get('quantity') - quantity
          item.set('quantity', currentQuantity)
          item.save().then ()->
            that.updateInventories(character)
            that.transitionToRoute('games.game.characters.inventories')
        @set('discardQuantity', null)


    showView: (operation)->

      if operation=="give"
        @toggleProperty('giveView')
        @set('discardView', false)
        @set('moveView', false)
      else if operation=="move"
        @toggleProperty('moveView')
        @set('discardView', false)
        @set('giveView', false)
      else if operation=="discard"
        @toggleProperty('discardView')
        @set('giveView', false)
        @set('moveView', false)

    giveItem: (itemRecord, quantity, character) ->

      if itemRecord and quantity > 0 and character
        inventory_item      = {}
        inventory_item.item_id      =  itemRecord.id
        inventory_item.thing_id     =  itemRecord.get('thing').get('id')
        inventory_item.character_id = character.id
        inventory_item.quantity = quantity
        data = inventory_item
        type =  'POST'
        url = constants.GIVE_ITEMS
        dataType =  'json'
        data =  data
        hash =
          dataType: dataType
          data: data
        request = ajax(url, type, hash, @)
        request.done (response) ->
          if response.msg == 1
            itemRecord.set('quantity', response.quantity)
            @goToInventories()
            @updateInventories(itemRecord.get('inventory.character'))

          else
              self.showAlertNow 'alert-error', "try again"
        request.fail (jqXHR, textStatus, e) ->
          console.log 'Error Occurred' + e

    moveItem: (itemRecord, quantity, inventoryRecord) ->

        if itemRecord and quantity > 0 and inventoryRecord
          inventory_item              = {}
          inventory_item.item_id      =  itemRecord.id
          inventory_item.thing_id     =  itemRecord.get('thing').get('id')
          inventory_item.inventory_id =  inventoryRecord.id
          inventory_item.quantity = quantity
          data = inventory_item
          type =  'POST'
          url = constants.MOVE_ITEMS
          dataType =  'json'
          data =  data
          hash =
            dataType: dataType
            data: data
          request = ajax(url, type, hash, @)
          request.done (response) ->
            if response.msg == 1
              itemRecord.set('quantity', response.quantity)
              @goToInventories()
              @updateInventories(itemRecord.get('inventory.character'))
            else
                self.showAlertNow 'alert-error', "try again"
          request.fail (jqXHR, textStatus, e) ->
            console.log 'Error Occurred' + e

    closeItemDetails: ()->
      @replaceRoute "games.game.characters.inventories"

`export default controller`
