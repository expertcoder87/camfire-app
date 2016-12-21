`import Ember from 'ember'`

controller = Ember.Controller.extend
  appController: Ember.inject.controller('application')
  notify: Ember.inject.service('notify'),
  fileObj: null,
  imageSource: ''
  characterTypes: ['PC', 'NPC']

  actions:

    updateRecord: (file)->
      @set('fileObj', file)
      self=this
      fileReader = new FileReader()
      fileReader.readAsDataURL(file.blob)
      fileReader.onload = (e) ->
              self.set('imageSource', e.target.result)

    saveRecord: ()->

      self=this
      @model.validate().then (arg)->
        if arg.validations.get('errors').length==0
          self.get('appController').set('loading',true)
          self.get('model').save().then (record)->
            if self.get('fileObj')
              self.get('fileObj').upload('/api/gm/characters/upload', {data:{resource: record.id}})
            self.get('appController').set('loading',false)
            self.transitionToRoute('games.game.characters')
        else
          for error in  arg.validations.get('errors')
            msg = error.get('message')
            self.get('notify').info(msg)

    goBack: ()->
      @model.unloadRecord()
      @transitionToRoute "games.game.characters"
      @set('imageSource', '')
      @set('fileObj', '')

`export default controller`
