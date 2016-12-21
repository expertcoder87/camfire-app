`import Ember from 'ember'`
`import constants from "frontend-upgrade/utils/constants"`
`import ajax from "frontend-upgrade/helpers/ajax"`


controller = Ember.Controller.extend

  notify: Ember.inject.service('notify')

  actions:
    closeActionDetails: ()->
      @transitionToRoute "games.game.stories.scenes"

    goBack:(model)->
      @transitionToRoute "games.game.stories.scenes"

    shareScene:(model) ->
      model.set('shareImage', true)
      model.set('sharedNow',true)
      model.save().then =>
        @get('notify').info("Shared with players")

    hideScene:(model) ->
      model.set('shareImage', false)
      model.save().then =>
        @get('notify').info("Hidden from players")

    updateRecord: (file)->
      @set('fileObj', file)
      self=this
      fileReader = new FileReader()
      fileReader.readAsDataURL(file.blob)
      fileReader.onload = (e) ->
              self.set('imageSource', e.target.result)

    askDelete:() ->
      @set('deleteDialog', true)

    removeDeleteDialog:() ->
      @set('deleteDialog', false)

    delete: ->
      that=this
      @model.destroyRecord().then ()->
        that.set('deleteDialog', false)
        that.transitionToRoute "games.game.stories.scenes"

    saveRecord: () ->
      self=this
      @model.save().then (record) ->
        if self.get('fileObj') and self.get('fileObj.state')=="queued"
          self.get('fileObj').upload('/api/gm/scenes/upload', {data:{resource: record.id}}).then((data) ->
            self.get('model').set('imageUrl',data.body.scenes.image_url)
            )
        self.get('notify').info("Success !!")
        self.transitionToRoute "games.game.stories.scenes"

`export default controller`
