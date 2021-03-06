`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: (params)->
    @store.findRecord('skill', params.skill_id).then (record)->
      record

  setupController: (controller,model) ->
    controller.set('model',model)
    @store.query('context',{game_id:model.get('game.id')}).then (contexts) ->
      controller.set('contexts', contexts.toArray())

  resetController: (controller, isExiting, transition) ->
    if isExiting and controller.get('model.hasDirtyAttributes')
      controller.get('model').rollbackAttributes()

`export default route`
