`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: (params)->
    @store.findRecord('game', params.id).then (record) ->
      record

  setupController: (controller, model)->
    @_super(controller, model)
    @controllerFor('application').set('whichNavOptions', false)

  deactivate: ()->
    @controllerFor('application').set('whichNavOptions', true)


`export default route`
