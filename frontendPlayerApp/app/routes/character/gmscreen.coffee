`import Ember from "ember"`

route = Ember.Route.extend

  navBarName: "GM SCREEN"

  setupController: (controller, model) ->
    @_super(controller, model)
    @controllerFor('application').get('history').pushObject(@get('routeName'))
    @controllerFor('application').set('navBarName', @navBarName)


  model: ()->
    @store.query('scene', {character_id: this.paramsFor('character').id})

`export default route`
