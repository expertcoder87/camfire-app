`import Ember from "ember"`
`import AuthenticatedRoute from "frontend-upgrade/routes/authenticated"`

route = AuthenticatedRoute.extend

  model: (params)->
    Ember.RSVP.hash(
      inventory:  @store.findRecord('inventory', params.inventory_id).then (record)->
          record
      things: @store.query('thing', {game_id:@modelFor('games.game').id, inventory_id: params.inventory_id}))

`export default route`
