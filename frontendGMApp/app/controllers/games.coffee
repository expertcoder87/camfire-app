`import Ember from 'ember'`

controller = Ember.Controller.extend

  actions:
    openGame: ()->
      @toggleProperty('whichNavOptions')

`export default controller`
