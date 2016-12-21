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
      @model.destroyRecord().then ()->
        that.set('deleteDialog', false)
        that.transitionToRoute "games.game.stories.index"

    saveStory: ()->
      that=this
      @model.validate().then (arg)->
        if arg.validations.get('errors').length
          for error in  arg.validations.get('errors')
            msg = error.get('message')
            that.get('notify').info(msg)
        else
          that.get('model').save().then (record)->
            that.transitionToRoute "games.game.stories.index"

    goBack: ()->
      @transitionToRoute "games.game.stories.index"


    openScenes: (story) ->
      if story
        @transitionToRoute "games.game.stories.scenes.index", story.id

`export default controller`
