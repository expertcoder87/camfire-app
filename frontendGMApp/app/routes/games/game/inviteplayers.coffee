`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: ()->
    Ember.RSVP.hash(
      invitations:  @store.findRecord('game', @paramsFor('games.game').id).then (record)->
                      record.get('invitations')
      game: @store.findRecord('game', @paramsFor('games.game').id))

  resetController: (controller, isExiting, transition) ->
    if isExiting and controller.get('model.hasDirtyAttributes')
      controller.get('model').rollbackAttributes()

`export default route`
