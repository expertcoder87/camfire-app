`import Ember from 'ember'`


controller = Ember.Controller.extend

  actions:
    editDetails: ()->
      @transitionToRoute('character.details')

    goToCharactersList: (id)->
      @replaceRoute "characters", id

    inventoryAction: ()->
      @transitionToRoute "character.inventories"

    editStats: ()->
      @transitionToRoute "character.editstats"

    goToQuests: ()->
      @transitionToRoute "character.quests"

    goToActions: ()->
      @transitionToRoute "character.actions"   

    goToGmScreen: ()->
      @transitionToRoute "character.gmscreen"         

`export default controller`
