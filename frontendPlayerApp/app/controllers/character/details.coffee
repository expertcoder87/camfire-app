`import Ember from 'ember'`

CharacterDetailsController = Ember.Controller.extend

  self:this

  actions:

    closeEdit: ()->
      $("md-dialog").hide();
      $(".md-dialog-container").hide();
      @replaceRoute 'character'
      $(".md-dialog-container").hide();


    saveCharacter: (description, characterGifts, characterFaults)->
      if description
        @get('character').set('description', description)

      if characterGifts
        @get('character').set('gifts', characterGifts)

      if characterFaults
        @get('character').set('faults', characterFaults)

      self=this
      self.replaceRoute 'character'
      @get('character').save()

`export default CharacterDetailsController`
