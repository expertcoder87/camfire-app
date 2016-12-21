`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  navBarName: "Choose Game"

  model: ()->
    @store.findAll('game')

  setupController: (controller, model) ->

    @_super(controller, model)
    controller.set('showPrompt', true)
    @controllerFor('application').set('navBarName', @navBarName)
    @controllerFor('application').get('history').pushObject(@get('routeName'));
    @controllerFor('application').set('showBackButton', false)

`export default route`
