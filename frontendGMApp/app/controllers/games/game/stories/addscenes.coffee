`import Ember from 'ember'`
`import constants from "frontend-upgrade/utils/constants"`
`import ajax from "frontend-upgrade/helpers/ajax"`


controller = Ember.Controller.extend

    actions:
      goBack:()->
        @set('imageSource',null)
        @transitionToRoute "games.game.stories.scenes", @model.get('story.id')

      updateRecord: (file)->
        @set('fileObj', file)
        self=this
        fileReader = new FileReader()
        fileReader.readAsDataURL(file.blob)
        fileReader.onload = (e) ->
          self.set('imageSource', e.target.result)

      saveRecord: () ->
        @model.save().then (record)=>
          if @get('fileObj')
            @get('fileObj').upload('/api/gm/scenes/upload', {data:{resource: record.id}}).then((data) =>
              @get('model').set('imageUrl',data.body.scene.image_url)
            )
        @set('imageSource',null)
        @transitionToRoute "games.game.stories.scenes", @model.get('story.id')

`export default controller`
