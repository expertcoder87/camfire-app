`import Ember from 'ember'`

controller = Ember.Controller.extend

    notify: Ember.inject.service('notify')

    itemLabelCallback: (inventory)->
        inventory.get('name')

    failure: (reason) ->
      @set('errorMesssage', reason)

    actions:

      closeCreateStash: ()->
        @transitionToRoute "games.game.characters.inventories", @model.get('id')

      goBack: ()->
        @transitionToRoute "games.game.characters.inventories"

      saveStash: (capacity, name, character)->
        if capacity && name && character && (capacity <= 999)
          pseudoThis=this
          newRecord = @store.createRecord('inventory', {name:name, character:character, capacity:capacity})
          this.set('stashName',null)
          this.set('capacity',null)                
          newRecord.save().then((newRecord)=>
            @transitionToRoute "games.game.characters.inventories", @model.get('id')).catch((arg)=>
              newRecord.unloadRecord()
              pseudoThis.get('notify').info("Name is already taken."))

`export default controller`
