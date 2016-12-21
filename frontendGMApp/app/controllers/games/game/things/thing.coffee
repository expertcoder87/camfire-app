`import Ember from 'ember'`

controller = Ember.Controller.extend

  notify: Ember.inject.service('notify')
  deleteDialog: false

  actions:

    askDelete:() ->
      @set('deleteDialog', true)

    removeDeleteDialog:() ->
      @set('deleteDialog', false)

    delete: ()->
      that=this
      @model.get('inventoryItems').forEach (record)->
        record.unloadRecord()
      @model.destroyRecord().then ()->
        that.set('deleteDialog', false)
        that.transitionToRoute "games.game.things.index"

    saveThing: ()->
      self=this
      @model.validate().then (arg)->
        if arg.validations.get('errors').length
          for error in  arg.validations.get('errors')
            msg = error.get('message')
            self.get('notify').info(msg)
        else
          self.get('model').save().then (record)->
            if self.get('fileObj') and self.get('fileObj.state')=="queued"
              self.get('fileObj').upload('/api/gm/things/upload', {data:{resource: record.id}}).then((data) ->
                self.get('model').set('imageUrl',data.body.thing.image_url)
                )
            self.get('notify').info("Success !!")
            self.transitionToRoute "games.game.things.index"

    goBack: ()->
      @transitionToRoute "games.game.things.index"

    updateRecord: (file)->
      @set('fileObj', file)
      self=this
      fileReader = new FileReader()
      fileReader.readAsDataURL(file.blob)
      fileReader.onload = (e) ->
              self.set('imageSource', e.target.result)

`export default controller`
