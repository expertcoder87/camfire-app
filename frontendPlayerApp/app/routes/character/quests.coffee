`import Ember from "ember"`

route = Ember.Route.extend

  navBarName: "Notes"

  setupController: (controller, model) ->
    @_super(controller, model)
    @controllerFor('application').get('history').pushObject(@get('routeName'))
    @controllerFor('application').set('showBackButton', true)
    @controllerFor('application').set('navBarName', @navBarName)


  model: ()->
    Ember.RSVP.hash(
      quest: @store.queryRecord('quest', {character_id: this.paramsFor('character').id, name: "Default Quest"}),
      questItems: @store.queryRecord('quest', {character_id: this.paramsFor('character').id, name: "Default Quest"}).then (record) ->
        record.get('questItems')
      )

`export default route`
