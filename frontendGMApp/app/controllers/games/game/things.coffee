`import Ember from 'ember'`

controller = Ember.Controller.extend

  actions:
    saveGame: (worldName, description, startingXp)->
      @model.set('wordName', worldName)
      @model.set('description', description)
      @model.set('startingXp', startingXp)
      that=this
      @model.save().then (record)->
        that.transitionToRoute "games.index"

    goBack: ()->
      @transitionToRoute "games.index"


`export default controller`
