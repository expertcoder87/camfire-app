`import Ember from 'ember'`

controller = Ember.Controller.extend

  actions:

    openStory: (story)->
      @transitionToRoute "games.game.stories.story", story.id

    goBack: ()->
      @transitionToRoute "games.index"

    createStory:()->
      @transitionToRoute "games.game.createstory"

`export default controller`
