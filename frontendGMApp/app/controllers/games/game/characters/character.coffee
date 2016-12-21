`import Ember from 'ember'`

controller = Ember.Controller.extend
  appController: Ember.inject.controller('application')
  notify: Ember.inject.service('notify')
  fileObj: ''
  imageSource: ''
  characterTypes: ["PC", "NPC"]

  actions:

    updateRecord: (file)->
      @set('fileObj', file)
      self=this
      fileReader = new FileReader()
      fileReader.readAsDataURL(file.blob)
      fileReader.onload = (e) ->
              self.set('imageSource', e.target.result)

    openInventory: (character)->
      if character
        @transitionToRoute "games.game.characters.inventories", character.id

    openActions: (character) ->
      if character
        @transitionToRoute "games.game.characters.actions", character.id

    saveCharacter: ()->
      self=this
      @model.validate().then (arg)->
        uniqueCharacterNameError = arg.validations.get('errors').findBy('type', 'unique-charactername')
        arg.validations.get('errors').removeObject(uniqueCharacterNameError) if uniqueCharacterNameError
        if arg.validations.get('errors').length
          for error in  arg.validations.get('errors')
            msg = error.get('message')
            self.get('notify').alert(msg)
        else
          self.get('appController').set('loading',true)
          $('.md-dialog-container').show()
          self.get('model').save().then (record)->
            if self.get('fileObj') and self.get('fileObj.state')=="queued"
              self.get('fileObj').upload('/api/gm/characters/upload', {data:{resource: record.id}}).then((data) ->
                self.get('model').set('imageUrl',data.body.character.image_url)
                )
            self.get('appController').set('loading',false)
            $('.md-dialog-container').hide()
            $('md-backdrop').remove()
            self.get('notify').info("Success !!")
            self.transitionToRoute('games.game.characters.index')


    goBack: ()->
      @transitionToRoute('games.game.characters.index')

`export default controller`
