`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  navBarName: "Character"

  setupController: (controller, model) ->
    @_super(controller, model)
    @controllerFor('application').set('navBarName', @navBarName)
    @controllerFor('character.index').set('model', model)
    @controllerFor('application').get('history').pushObject(@get('routeName'))
    @controllerFor('application').set('showBackButton', true)
    model.set('user', @get('session.user'))
    model.save()

  model: (params) ->
    @store.findRecord('character' , params.id, {reload: true})


`export default route`
