`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  resetController: (controller, isExiting, transition) ->
    if isExiting
      controller.set('worldName', '')
      controller.set('description', '')
      controller.set('startingXp', '')

`export default route`
