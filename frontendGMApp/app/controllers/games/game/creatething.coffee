`import Ember from 'ember'`

controller = Ember.Controller.extend
  appController: Ember.inject.controller('application')
  notify: Ember.inject.service('notify'),
  fileObj: null,
  imageSource: ''

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
          $('.md-dialog-container').show()
          self.get('model').save().then (record)->
            if self.get('fileObj')
              self.get('fileObj').upload('/api/gm/things/upload', {data:{resource: record.id}}).then((data) ->
                self.get('model').set('imageUrl',data.body.thing.image_url)
                )
            self.get('appController').set('loading',false)
            $('.md-dialog-container').hide()
            $('md-backdrop').remove()
            self.transitionToRoute('games.game.things')
        else
          for error in  arg.validations.get('errors')
            msg = error.get('message')
            self.get('notify').info(msg)

    goBack: ()->
      @model.unloadRecord()
      @transitionToRoute "games.game.things"

`export default controller`
