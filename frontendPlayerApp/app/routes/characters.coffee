`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  navBarName: "Characters"
  currentGame: Ember.inject.service('current-game')

  model:(params) ->
    if params.id
      Ember.RSVP.hash(
        game: @store.findRecord('game', params.id,{reload:true}),
        characters: @store.query('character', {game_id: params.id, assigned: false}))
    else
      transitionToRoute 'application'

  afterModel:(model, transition) ->
    @get('currentGame').setGame(model.game)

  setupController: (controller, model) ->
    @_super(controller, model)
    controller.set('selected_game', model.game)
    @controllerFor('application').set('navBarName', @navBarName)
    @controllerFor('application').get('history').pushObject(@get('routeName'));
    @controllerFor('application').set('showBackButton', true)

  resetController: (controller, isExiting, model) ->
    if isExiting
      controller.set('showPrompt', true)

`export default route`
