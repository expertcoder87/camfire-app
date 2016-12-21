`import Ember from 'ember'`


controller = Ember.Controller.extend

  actions:
    sceneDetails: (sceneId)->
      if sceneId
        @transitionToRoute('games.game.stories.scenes.edit', sceneId)

    goBack:()->
      @transitionToRoute "games.game.stories.story", @model.story.id

    addScene: (story)->
        @transitionToRoute('games.game.stories.addscenes', story.id)

`export default controller`
