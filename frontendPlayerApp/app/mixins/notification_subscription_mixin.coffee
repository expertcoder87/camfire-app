`import Ember from 'ember'`
`import RealTimeMixin from 'frontend-upgrade/mixins/real_time_mixin'`


# controller wrapping the realtime update library client
# A controller, rather than a mixin is used to ensure that only one instance of realtime client exist in the whole app
# This controller will be having a singleton instance and other controllers should need it to subscribe channels

notificationSubscription = Ember.Mixin.create RealTimeMixin,

  notificationCallback:(payload)->
    parsedPayload = JSON.parse(payload)
    if parsedPayload['character']
      @store.pushPayload(parsedPayload)
    else if parsedPayload['inventory']
      controller= this.controllerFor('character.inventories')
      @store.findRecord('character', this.paramsFor('character').id, {reload:true}).then (record)->
          controller.set('model',record.get('inventories', { reload: true }))
    else if parsedPayload['inventory_item']
      controller= this.controllerFor('character.inventories')
      controller.set('inventoryItems', @store.query('inventory-item', {inventory_id: controller.get('inventorySelected.id')}))
    else if parsedPayload['action']
      controller= this.controllerFor('character.actions')
      that=this
      this.store.query('action', {character_id: this.paramsFor('character').id}).then (actions) ->
        controller.set('model.actions', actions)
        if controller.get('selectedContext.name') == 'All Skills and Attributes'
          controller.set('actionList', controller.get('model.actions'))
        else
          controller.set('actionList', controller.get('model.actions').filterBy('context', controller.get('selectedContext.name')))
    else if parsedPayload['scene']
      @store.query('scene', {character_id: this.paramsFor('character').id}).then (record) ->
        controller= this.controllerFor('character.gmscene')
        controller.set('model',record)

  subscribeToNotificationChannel:->
    @subscribe('/notifications' , @notificationCallback, @)

  unsubscribeToNotificationChannel:->
    @unsubscribe('/notifications')

`export default notificationSubscription`
