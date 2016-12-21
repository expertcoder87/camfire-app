`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  setupController: (controller, model) ->
    controller.set('character', @modelFor('character'))
    controller.set('description', @modelFor('character').get('description'))
    controller.set('characterGifts', @modelFor('character').get('gifts'))
    controller.set('characterFaults', @modelFor('character').get('faults'))

  # renderTemplate:(controller, model)->
  #   @render 'games.characters'



`export default route`
