`import Ember from 'ember'`

controller = Ember.Controller.extend

  actions:

    openThing: (thing)->
      @transitionToRoute "games.game.things.thing", thing.id

    goBack: ()->
      @transitionToRoute "games.index"

    createThing:()->
      @transitionToRoute "games.game.creatething"

`export default controller`
