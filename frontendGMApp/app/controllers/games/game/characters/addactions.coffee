`import Ember from 'ember'`
`import constants from "frontend-upgrade/utils/constants"`
`import ajax from "frontend-upgrade/helpers/ajax"`


controller = Ember.Controller.extend
    validlLevels: ['Terrible', 'Poor', 'Mediocre', 'Fair', 'Good', 'Great', 'Superb']
    actionSelected: ''
    levelSelected: ''
    #obj can be Skill or Attribute
    actionLabelCallback: (obj)->
      obj.get('name')

    actions:

      goBack:(character)->
        @transitionToRoute "games.game.characters.actions", character.id

      saveAction: (character, levelSelected, actionSelected)->
        if character and levelSelected and actionSelected
          @store.createRecord('game-action', {
            actionName:actionSelected.get('name')
            description: actionSelected.get('description')
            level: levelSelected
            character: character
            actionTarget:actionSelected}).save().then (record) =>
              @transitionToRoute "games.game.characters.actions", character.id

`export default controller`
