`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend
  
  model:()->
    @store.query('user', {user: true})

`export default route`
