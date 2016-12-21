`import Ember from 'ember'`

controller = Ember.Controller.extend

  actions:

    openAttribute: (attribute)->
      @transitionToRoute "games.game.attributes.attribute", attribute.id

    goBack: ()->
      @transitionToRoute "games.index"

    createAttribute:()->
      @transitionToRoute "games.game.createattribute"

`export default controller`
