`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: ()->
    @store.findRecord('game', @paramsFor('games.game').id).then (record)->
        record.get('skills')

`export default route`
