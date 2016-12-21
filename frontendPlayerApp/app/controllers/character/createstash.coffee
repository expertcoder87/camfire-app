`import Ember from 'ember'`


controller = Ember.Controller.extend
  stashName: null
  capacity: null
  isDisabled: false
  errorMessage: null
  pseudoThis = this

  transitionToInventory: (stash)->
    @replaceRoute "character.inventories"

  failure: (reason) ->
      pseudoThis.set('errorMessage', reason)

  valuesChanged: Ember.observer('capacity', 'stashName', ()->
    @set('errorMessage', null))

  actions:
    closeCreateStash: ()->
      @replaceRoute "character.inventories"

    saveStash: (capacity, name, character)->
      if capacity && name && character && (capacity <= 999)
        pseudoThis=this
        @set('isDisabled', true)
        newRecord = @store.createRecord('inventory', {name:name, character:character, capacity:capacity})
        newRecord.save()
          .then((record)=>
            @set('isDisabled', false)
            pseudoThis.transitionToInventory(record)).catch((arg)=>
              newRecord.unloadRecord()
              @set('isDisabled', false)
              pseudoThis.failure("Name is already taken."))

`export default controller`
