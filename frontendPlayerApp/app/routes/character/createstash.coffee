`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  setupController: (controller, nullModel) ->
    controller.set('character', @modelFor('character'))
    controller.set('stashName', null)
    controller.set('capacity', null)
    controller.set('errorMesssage', null)


`export default route`
