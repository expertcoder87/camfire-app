`import Ember from 'ember'`

controller = Ember.Controller.extend

  actions:
    openUser: ()->
      @toggleProperty('whichNavOptions')

`export default controller`
