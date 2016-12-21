`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: (params) ->
    if params.action_id
      @store.findRecord('action', params.action_id)
`export default route`
