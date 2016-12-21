`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend
  
  model:()->
    @store.query('game', {shared_to_market: true})

`export default route`
