`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model:(params)->
    @store.findRecord('game', @paramsFor('games.game').id).then (record) ->
      record

  setupController: (controller, model)->
    controller.set('model', model)
    controller.set('worldName', model.get('worldName'))
    controller.set('description', model.get('description'))
    controller.set('startingXp', model.get('startingXp'))

`export default route`
