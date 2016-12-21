`import Ember from "ember"`

route = Ember.Route.extend

  navBarName: "Actions"

  setupController: (controller, model) ->
    @_super(controller, model)
    controller.set('model', model)
    @controllerFor('application').get('history').pushObject(@get('routeName'))
    @controllerFor('application').set('showBackButton', true)
    @controllerFor('application').set('navBarName', @navBarName)


  model: ()->
    Ember.RSVP.hash(
      contexts: @store.query('context', {character_id: this.paramsFor('character').id}),
      actions: @store.query('action', {character_id: this.paramsFor('character').id})
      )

`export default route`
